import { Drawer, IconButton } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useState } from 'react'

const ShoppingCart = () => {

    const [openCart, setOpenCart] = useState(false)

    return (
        <>
            <IconButton onClick={() => setOpenCart(true)} >
                <ShoppingCartIcon htmlColor="#ffffff" />
            </IconButton>
            <Drawer PaperProps={{style: {width: '30%'}}} anchor="right" open={openCart} onClose={() => setOpenCart(false)} >
                <div>
                    Soy un carrito de compras
                </div>
            </Drawer>
        </>
    )
}

export default ShoppingCart
