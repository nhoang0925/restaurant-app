import supertest from 'supertest';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import app from "../server";
import ReserveTable from '../client/src/components/ReserveTable';
import db from '../database';

chai.use(sinonChai);
export const { expect } = chai;
export const server = supertest.agent(app);
export const database = supertest.agent(db);
export const BASE_URL = '/v1';