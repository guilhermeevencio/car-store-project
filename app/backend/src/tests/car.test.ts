import * as sinon from 'sinon';
import * as chai from 'chai';
import CarModel from '../database/models/CarModel';
// @ts-ignore
import chaiHttp = require('chai-http');
import { expect } from 'chai';
import { Response } from 'express';

import { app } from '../app';
import { carMock } from './mocks/carMock';

chai.use(chaiHttp)

describe('\"/car\" route', () => {
  let chaiHttpResponse: Response;

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
  let chaiHttpResponse: Response;

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

    expect(response.body).to.equal(carMock);
  })
});