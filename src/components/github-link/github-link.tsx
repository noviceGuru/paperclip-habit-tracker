import GitHubIcon from "../../assets/github-icon.svg"

export default function GitHubLink() {
    return (
        <a
            className="flex justify-center absolute right-6 top-6"
            href="https://github.com/noviceGuru/paperclip-habit-tracker"
            target="_blank"
        >
            <img src={GitHubIcon} alt="show-list-button" className="w-8 h-8 md:w-10 md:h-10 cursor-pointer align-middle lg:w-12 lg:h-12 2xl:w-18 2xl:h-18" />
        </a>
    )
}
