import {createStore} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer";

const persistConfig = {
    key: 'persist-key',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store)
export { persistor };
export default store;
console.log(store.getState())