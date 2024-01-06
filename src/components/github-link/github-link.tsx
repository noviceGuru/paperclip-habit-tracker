import GitHubIcon from "../../assets/github-icon.svg"

export default function GitHubLink() {
    return (
        <a
            className="flex justify-center absolute right-2 top-1"
            href="https://github.com/noviceGuru/paperclip-habit-tracker"
            target="_blank"
        >
            <img src={GitHubIcon} alt="show-list-button" className="m-6 w-8 sm:w-12" />
        </a>
    )
}
