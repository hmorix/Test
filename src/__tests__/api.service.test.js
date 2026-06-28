import { ApiService } from '@/services/api.service';
import { createLocalVue, mount } from '@vue/test-utils';
import Vue from 'vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const localVue = createLocalVue();

describe('ApiService', () => {
  let apiService;
  let mock;

  beforeEach(() => {
    apiService = new ApiService();
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should make a GET request', async () => {
    const url = '/api/test';
    const response = { data: 'Test data' };
    mock.onGet(url).reply(200, response);

    const result = await apiService.get(url);
    expect(result).toEqual(response);
  });

  it('should make a POST request', async () => {
    const url = '/api/test';
    const data = { test: 'Test data' };
    const response = { data: 'Test data' };
    mock.onPost(url).reply(201, response);

    const result = await apiService.post(url, data);
    expect(result).toEqual(response);
  });

  it('should make a PUT request', async () => {
    const url = '/api/test';
    const data = { test: 'Test data' };
    const response = { data: 'Test data' };
    mock.onPut(url).reply(200, response);

    const result = await apiService.put(url, data);
    expect(result).toEqual(response);
  });

  it('should make a DELETE request', async () => {
    const url = '/api/test';
    const response = { data: 'Test data' };
    mock.onDelete(url).reply(200, response);

    const result = await apiService.delete(url);
    expect(result).toEqual(response);
  });

  it('should handle errors', async () => {
    const url = '/api/test';
    mock.onGet(url).reply(404);

    try {
      await apiService.get(url);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});