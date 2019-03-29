describe('CarsController', function() {
    beforeEach(module('appModule'));

    var scope, controller, service;

    beforeEach(inject(function($controller, $rootScope, carsService) {
        scope = $rootScope.$new();
        service = carsService;
        controller = $controller('carsController', {
            $scope: scope,
            carsService: service
        });
    }));
    
    describe('Buttons actions', function() {

        it('onCreateAction - form appears', function() {
            scope.action = { create: false, update: false };
            scope.onCreateAction();
            expect(scope.action).toEqual({ create: true, update: false });
        });
        it('onUpdateAction - form appears', function() {
            scope.action = { create: false, update: false };
            scope.onUpdateAction();
            expect(scope.action).toEqual({ create: false, update: true });
        });
    });
});