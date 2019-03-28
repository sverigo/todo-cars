carsApp.factory('carsService', ($http) => {
    const url = 'http://localhost:3000/cars/';

    return {
        getCars: function() {
            return $http.get(url).then((response) => {
                return response.data;
            });
        },
        createCar: function(data) {
            return $http.post(url, data).then((response) => {
                return response.data;
            });
        },
        updateCar: function(data) {
            return $http.put(url + data.id, data).then((response) => {
                return response.data;
            });
        },
        deleteCar: function(id) {
            return $http.delete(url + id).then((response) => {
                return response.data;
            });
        }
    }
});