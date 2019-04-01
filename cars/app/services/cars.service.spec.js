describe('CarsService:', function() {

    var service, httpMock, cars, scope;

    beforeEach(module('appModule'));

    beforeEach(inject(function($injector) {
        service = $injector.get('carsService');
        httpMock = $injector.get('$httpBackend');
        scope = $injector.get('$rootScope').$new();
    }));

    afterEach(function() {
        httpMock.verifyNoOutstandingExpectation();
        httpMock.verifyNoOutstandingRequest();
    });

    it('cars service should be defined', function() {
        expect(service).toBeDefined();
    });

    it('get cars should be return cars list', function(done) {
        var promisedData = [{ id: 1, make: 'Test', model: 'Car1', price: 15999 },
                            { id: 2, make: 'Test', model: 'Car2', price: 21599 }];

        spyOn(service, 'getCars').and.returnValue(Promise.resolve(promisedData));

        service.getCars().then((data) => {
            expect(data[1].price).toEqual(21599);
            expect(data[0].model).toEqual('Car1');
            done();
        });
    });

    it('create car should be return created car object', function(done) {
        var createdCar = { id: 1, make: 'Test', model: 'Car', price: 15000 };

        spyOn(service, 'createCar').and.returnValue(Promise.resolve(createdCar));

        service.createCar(createdCar).then((data) => {
            expect(data).toEqual(createdCar);
            done();
        });
    });

    it('update car should be return updated car object', function(done) {
        var updatedCar = { id: 3, make: 'Test', model: 'Car', price: 15099 };

        spyOn(service, 'updateCar').and.returnValue(Promise.resolve(updatedCar));

        service.updateCar(updatedCar).then((data) => {
            expect(data).toEqual(updatedCar);
            done();
        });
    });

    it('delete car should be return empty object', function(done) {
        spyOn(service, 'deleteCar').and.returnValue(Promise.resolve({}));
        
        service.deleteCar(2).then((data) => {
            expect(data).toEqual({});
            done();
        });
    });
});