// frontend/src/__tests__/hooks.test.js

import { mount } from '@vue/test-utils';
import { useFetch, useDebounce, useLocalStorage } from '../hooks';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: 'Mocked data' })),
}));

describe('useFetch', () => {
  it('should fetch data on mount', async () => {
    const wrapper = mount({
      template: '<div></div>',
      setup() {
        const { data, error } = useFetch('https://example.com/api/data');
        return { data, error };
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.data).toBe('Mocked data');
  });

  it('should handle errors', async () => {
    jest.mock('axios', () => ({
      get: jest.fn(() => Promise.reject('Mocked error')),
    }));

    const wrapper = mount({
      template: '<div></div>',
      setup() {
        const { data, error } = useFetch('https://example.com/api/data');
        return { data, error };
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.error).toBe('Mocked error');
  });
});

describe('useDebounce', () => {
  it('should debounce function calls', async () => {
    const wrapper = mount({
      template: '<div></div>',
      setup() {
        const debouncedFunction = useDebounce(() => 'Debounced result', 500);
        return { debouncedFunction };
      },
    });

    const result1 = wrapper.vm.debouncedFunction();
    const result2 = wrapper.vm.debouncedFunction();
    await wrapper.vm.$nextTick();
    expect(result1).toBeUndefined();
    expect(result2).toBeUndefined();

    await new Promise(resolve => setTimeout(resolve, 600));
    const result3 = wrapper.vm.debouncedFunction();
    await wrapper.vm.$nextTick();
    expect(result3).toBe('Debounced result');
  });
});

describe('useLocalStorage', () => {
  it('should store and retrieve data', async () => {
    const wrapper = mount({
      template: '<div></div>',
      setup() {
        const { getItem, setItem } = useLocalStorage('test-key');
        return { getItem, setItem };
      },
    });

    wrapper.vm.setItem('Test value');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.getItem()).toBe('Test value');
  });

  it('should handle invalid data', async () => {
    const wrapper = mount({
      template: '<div></div>',
      setup() {
        const { getItem, setItem } = useLocalStorage('test-key');
        return { getItem, setItem };
      },
    });

    wrapper.vm.setItem(null);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.getItem()).toBeNull();
  });
});