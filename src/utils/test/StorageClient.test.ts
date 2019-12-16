import * as SecureStore from 'expo-secure-store';
import {DataConsumer} from '../DataConsumer';
import {StorageClient} from '../StorageClient';

const KEY = 'key';
const VALUE = 'value';
const client = new StorageClient();


describe("StorageClient tests", () => {
    it("Stores the value with its respective key", async () => {
        const spy = jest.spyOn(SecureStore, "setItemAsync");
        spy.mockReturnValue(new Promise((resolve, reject) => resolve()));

        const consumer = DataConsumer.CLIENT;
        const expectedKey = consumer.toString().concat(".", KEY);
        await client.store(KEY, VALUE, consumer);
        expect(spy).toBeCalledTimes(1);
        expect(spy).toBeCalledWith(expectedKey, VALUE, undefined);
    })

    it("Returns the previously stored value", async () => {
        const spy = jest.spyOn(SecureStore, "getItemAsync");
        spy.mockReturnValue(new Promise((resolve, reject) => resolve(VALUE)));

        const retrievedValue = await client.retrieve(KEY, DataConsumer.CLIENT);
        expect(spy).toBeCalledTimes(1);
        expect(retrievedValue).toBe(VALUE);
    })
})