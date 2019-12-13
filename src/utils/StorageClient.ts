import * as SecureStore from 'expo-secure-store';

export declare enum DataConsumer {
    SERVER,
    USER,
    CLIENT
}

export default class StorageClient {
    async retrieve(key: string, consumer: DataConsumer, options?: SecureStore.SecureStoreOptions): Promise<string> {
        const keyToStore = this.buildKey(key, consumer);
        try {
            const item = await SecureStore.getItemAsync(keyToStore, options);
            return item;
        } catch (error) {
            alert(error);
        }
    }

    async store(key: string, value: string, consumer: DataConsumer, options?: SecureStore.SecureStoreOptions) {
        const keyToStore = this.buildKey(key, consumer);
        try {
            await SecureStore.setItemAsync(keyToStore, value, options);
        } catch (error) {
            alert(error);
        }
    }

    buildKey(key: string, context: DataConsumer): string {
        return context.toString().concat(".", key);
    }
}