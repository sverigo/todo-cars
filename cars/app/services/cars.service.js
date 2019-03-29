export default function CarsService($http) {
    const url = 'http://localhost:3000/cars/';

    return {
        getCars: () => {
            return $http.get(url).then((response) => {
                return response.data;
            });
        },
        createCar: (car) => {
            return $http.post(url, car).then((response) => {
                return response.data;
            });
        },
        updateCar: (car) => {
            return $http.put(url + car.id, car).then((response) => {
                return response.data;
            });
        },
        deleteCar: (id) => {
            return $http.delete(url + id).then((response) => {
                return response.data;
            });
        }
    }
}

CarsService.$injector = ['$http'];