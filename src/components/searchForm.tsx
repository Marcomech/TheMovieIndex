import React, { useState } from 'react';
import { Collapse, IconButton, TextField } from '@mui/material';
import clsx from 'clsx';

import SearchIcon from '@mui/icons-material/Search';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { SearchField } from '@/constants/themes';


type StateChanger = (newValue: string) => void;

export default function SearchButton({ stateChanger }: { stateChanger: StateChanger }) {
    const [searching, setSeraching] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        stateChanger(value);
    };

    return (
        <ClickAwayListener
            onClickAway={() => { setSeraching(false) }}>
            {searching ?
                <form>
                    <SearchField
                        focused
                        size="small"
                        label="Busqueda"
                        onChange={handleChange}
                        margin="normal"
                        variant='outlined'
                    />
                </form>
                :
                <IconButton
                    onClick={() => setSeraching(true)}>
                    <SearchIcon color='primary' />
                </IconButton>
            }
        </ClickAwayListener>
    );
};
