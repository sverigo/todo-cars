import Car from '../models/car.model.js';

export default function CarsController($scope, carsService) {
    $scope.cars = [];
    $scope.action = { create: false, update: false };
    $scope.processedData = {};

    carsService.getCars().then((data) => {
        $scope.cars = data;
    });

    $scope.onCreateAction = () => {
        $scope.action.create = true;
        $scope.action.update = false;
    }

    $scope.onUpdateAction = (id) => {
        $scope.action.create = false;
        $scope.action.update = true;
        $scope.processedData = angular.copy($scope.cars.find(i => i.id === id));
    }

    $scope.onDeleteAction = (id) => {
        const car = $scope.cars.find(i => i.id === id);
        const position = $scope.cars.indexOf(car);
        $scope.cars.splice(position, 1);
        carsService.deleteCar(id);
        hideForm();
    }

    $scope.process = (id, make, model, price) => {
        if (id === undefined) {
            let id = getLastCarId() + 1;
            const car = new Car(id, make, model, price)
            $scope.cars.push(car);
            carsService.createCar(car);
        } else {
            const car = $scope.cars.find(i => i.id === id);
            car.make = make;
            car.model = model;
            car.price = price;
            carsService.updateCar(car);
        }
        hideForm();
    }

    $scope.cancel = () => {
        hideForm();
    }

    function getLastCarId() {
        let id = 0;
        const cars = $scope.cars;
        cars.forEach((car) => {
            if (id < car.id) id = car.id;
        });
        return id;
    }

    function hideForm() {
        $scope.processedData = {};
        $scope.action.create = false;
        $scope.action.update = false;
    }
}

CarsController.$injector = ['$scope', 'carsService'];