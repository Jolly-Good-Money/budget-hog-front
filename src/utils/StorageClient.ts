import * as SecureStore from 'expo-secure-store';
import { DataConsumer } from './DataConsumer';

export class StorageClient {
    public async retrieve(key: string, consumer: DataConsumer, options?: SecureStore.SecureStoreOptions): Promise<string|null> {
        const keyToStore = this.buildKey(key, consumer);
        try {
            return SecureStore.getItemAsync(keyToStore, options);            
        } catch (error) {
            alert(error);
            return null;
        }
    }

    public async store(key: string, value: string, consumer: DataConsumer, options?: SecureStore.SecureStoreOptions): Promise<void> {
        const keyToStore = this.buildKey(key, consumer);
        try {
            await SecureStore.setItemAsync(keyToStore, value, options);
        } catch (error) {
            alert(error);
        }
    }

    private buildKey(key: string, context: DataConsumer): string {
        return context.toString().concat(".", key);
    }
}

