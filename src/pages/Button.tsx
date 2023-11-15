import { ReactNode } from "react"

export const Button = ({ isDisabled, children }: { isDisabled: boolean, children: ReactNode }) => {
    return (
        <button style={{ background: isDisabled ? 'red' : 'green' }}>
            {children}
        </button>
    )
}