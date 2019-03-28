describe('CarsController', function() {
    beforeEach(module('carsApp'));
    let scope, createController;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller('CarsController', { '$scope': scope });
        }
    }));

    describe('Buttons actions', function() {
        it('onCreateAction - form appears', function() {
            createController();
            scope.action = { create: false, update: false };
            scope.onCreateAction();
            expect(scope.action).toEqual({ create: true, update: false });
        });
        it('onUpdateAction - form appears', function() {
            createController();
            scope.action = { create: false, update: false };
            scope.onUpdateAction();
            expect(scope.action).toEqual({ create: false, update: true });
        })
    });
});