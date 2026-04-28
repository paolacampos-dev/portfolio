export type Project = {
    id: number
    title: string
    type: "fullstack" | "frontend" | "wordpress"
    image?: string
    alt?: string
    github?: string
    live?: string
    description: string
    tech: string[]
}