/**
 * Dependencies
 */

import React, { useCallback } from 'react'

/**
 * Types
 */

import { TButton } from './types'

/**
 * Styled
 */

import { StyledButton } from './styled'

/**
 * Expo
 */

export const Button: React.FC<TButton> = ({
    size,
    type,
    onClick,
    children,
}: TButton) => {
    const handleClick = useCallback(
        (event) => {
            if (onClick) onClick(event)
        },
        [onClick]
    )

    return (
        <StyledButton size={size} type={type} onClick={handleClick}>
            {children}
        </StyledButton>
    )
}
