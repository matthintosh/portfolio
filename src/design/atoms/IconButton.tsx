interface IconButtonProps {
    src: string
    onClick: () => void
}

export const IconButton = ({ src, onClick }: IconButtonProps) => {
    return (
        <button onClick={onClick}>
            <img src={src} alt="iconc" />
        </button>
    )
}
