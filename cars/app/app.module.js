import angular from 'angular';
import CarsController from './controllers/cars.controller.js';
import CarsService from './services/cars.service.js';

angular.module('appModule', [])
    .controller('carsController', ['$scope', 'carsService', CarsController])
    .factory('carsService', ['$http', CarsService]);