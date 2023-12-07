export default function LogoutSvg({ className }: { className?: string }) {
    return (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className ?? ""}
        >
            <path
                opacity="0.5"
                d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <path
                d="M10 12H20M20 12L17 9M20 12L17 15"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}
