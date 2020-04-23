import React from 'react';
import { hearthstoneApi } from '../../api';

export function Home() {

    React.useEffect(() => {
        hearthstoneApi.getAllCards();
    }, [])

    return <h1>Hello world!</h1>
}
