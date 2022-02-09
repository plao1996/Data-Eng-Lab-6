import React, { useEffect, useState } from 'react';

export const Fetcher = ()=> {
    const [initialState, setIntialState] = useState([])

    useEffect(() => {
        fetch('/api/').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonResponse => setIntialState(jsonResponse))
    }, [])

    console.log(initialState)
    return (<div>Page Refresh Count {initialState.pageCount}</div>)
}