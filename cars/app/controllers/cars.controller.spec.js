describe('CarsController:', function () {
    beforeEach(module('appModule'));

    var scope, controller, service,
        testData = [{ id: 1, make: 'Test1', model: 'Car1', price: 15000 },
        { id: 2, make: 'Test2', model: 'Car1', price: 16999 },
        { id: 4, make: 'Test2', model: 'Car2', price: 12599 }];

    beforeEach(inject(function ($controller, $rootScope, carsService) {
        scope = $rootScope.$new();
        service = carsService;
        controller = $controller('carsController', {
            $scope: scope,
            carsService: service
        });
    }));

    it('onCreateAction should be changed action object', function () {
        scope.action = { create: false, update: false };
        scope.onCreateAction();
        expect(scope.action).toEqual({ create: true, update: false }); // If form appears
    });
    it('onUpdateAction should be change action object and processedData', function () {
        scope.action = { create: false, update: false };
        scope.cars = testData.slice(0);
        scope.cars.forEach(function (car) {
            scope.onUpdateAction(car.id);
            expect(scope.action).toEqual({ create: false, update: true }); // If form appears
            expect(scope.processedData).toEqual(car); // If processedData contains current car
        });
    });
    it('onDeleteAction should be delete current car from cars array', function () {
        scope.cars = testData.slice(0);
        scope.cars.forEach(function (car) {
            var count = scope.cars.length;
            scope.onDeleteAction(car.id);
            expect(scope.cars.length).toEqual(count - 1); // If car deletes from cars array
        });
    });
    it('_getLastCarId should be return last car id', function() {
        scope.cars = testData.slice(0);
        var last = scope._getLastCarId();
        expect(last).toEqual(4);
    });
    it('_hideForm should be hide form', function() {
        scope.action = { create: true, update: false }
        scope._hideForm();
        expect(scope.action).toEqual({ create: false, update: false });
    });
    it('process function should be create car', function() {
        scope.cars = [];
        scope.process(undefined, 'Test', 'Car', 22800);
        expect(scope.cars[0].id).toEqual(1);
        expect(scope.cars[0].model).toEqual('Car');
    });
    it('process function shoud be update car', function() {
        scope.cars = testData.slice(0);
        scope.process(2, 'Test2', 'Car1', 1689);
        expect(scope.cars[1].price).toEqual(1689);
    });
});