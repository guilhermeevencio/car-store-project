import * as sinon from 'sinon';
import * as chai from 'chai';
import CarModel from '../database/models/CarModel';
import * as jwt from 'jsonwebtoken';
// @ts-ignore
import chaiHttp = require('chai-http');
import { expect } from 'chai';

import { app } from '../app';
import { carMock, carRequestInfo, carUpdateResponse } from './mocks/carMock';
import { userMock } from './mocks/userMock';
import UserModel from '../database/models/UserModel'
import CustomError from '../Error/CustomError';

chai.use(chaiHttp)

describe('\"/car\" route', () => {

  beforeEach(() => {
    sinon.stub(CarModel, 'findAll').resolves([carMock] as CarModel[])
  });

  afterEach(()=>{
    (CarModel.findAll as sinon.SinonStub).restore();
  })

  it('retorna status 200', async  () => {
    const response = await chai.request(app)
      .get('/cars')

    expect(response.status).to.equal(200);
  })

  it('retorna a lista de carros', async () => {
    const response = await chai
       .request(app)
       .get('/cars')

    expect(response.body[0]).to.deep.equal(carMock);
  });
});

describe('\"cars/id\" route', () => {

  beforeEach(() => {
    sinon.stub(CarModel, 'findOne').resolves(carMock as CarModel)
  });

  afterEach(()=>{
    (CarModel.findOne as sinon.SinonStub).restore();
  })

  it('retorna status 200', async  () => {
    const response = await chai.request(app)
      .get('/cars/1')

    expect(response.status).to.equal(200);
  })

  it('retorna o carro selecionado', async  () => {
    const response = await chai.request(app)
      .get('/cars/1')

    expect(response.body).to.deep.equal(carMock);
  })
});

describe('\"cars\" register route with correct token', () => {

  beforeEach(async () => {
    sinon.stub(CarModel, 'create').resolves(carMock as CarModel);
    sinon.stub(jwt, "verify").callsFake(() => userMock as UserModel);
  });

  afterEach(()=>{
    (CarModel.create as sinon.SinonStub).restore();
    (jwt.verify as sinon.SinonStub).restore();
  })

  it('A requisição retorna status 201 e os dados do carro criado.', async () => {
    const response = await chai.request(app)
      .post('/cars')
      .send(carRequestInfo)
      .set('authorization', 'my_token');

    expect(response.status).to.equal(201);
    expect(response.body).to.be.deep.equal(carMock);
  });

});

describe('\"cars\" register route with wrong token', () => {

  beforeEach(async () => {
    sinon.stub(CarModel, 'create').resolves(carMock as CarModel);
    sinon.stub(jwt, "verify").callsFake(() => new CustomError('Token must be a valid token', 401));
  });

  afterEach(()=>{
    (CarModel.create as sinon.SinonStub).restore();
    (jwt.verify as sinon.SinonStub).restore();
  })

  it('Verifica que não é possível registrar um carro sem token válido.', async () => {
    const response = await chai.request(app)
      .post('/cars')
      .send(carRequestInfo)
      .set('authorization', 'my_wrong_token');

    expect(response.status).to.equal(401);
    expect(response.body.message).to.be.equal('Token must be a valid token');
  });
});

describe('\"cars\" update route with correct token', () => {

  beforeEach(async () => {
    sinon.stub(CarModel, 'update');
    sinon.stub(jwt, "verify").callsFake(() => userMock as UserModel);
  });

  afterEach(()=>{
    (CarModel.update as sinon.SinonStub).restore();
    (jwt.verify as sinon.SinonStub).restore();
  })

  it('A requisição retorna status 201 e a mensagem de sucesso.', async () => {
    const response = await chai.request(app)
      .put('/cars')
      .send(carRequestInfo)
      .set('authorization', 'my_token');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.deep.equal({ message: 'Successfully updated!' });
  });

});

describe('\"cars\" update route with wrong token', () => {

  beforeEach(async () => {
    sinon.stub(CarModel, 'update')
    sinon.stub(jwt, "verify").callsFake(() => new CustomError('Token must be a valid token', 401));
  });

  afterEach(()=>{
    (CarModel.update as sinon.SinonStub).restore();
    (jwt.verify as sinon.SinonStub).restore();
  })

  it('Verifica que não é possível atualizar um carro sem token válido.', async () => {
    const response = await chai.request(app)
      .put('/cars')
      .send(carRequestInfo)
      .set('authorization', 'my_wrong_token');

    expect(response.status).to.equal(401);
    expect(response.body.message).to.be.equal('Token must be a valid token');
  });
});