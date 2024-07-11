import { X, Tag, Calendar, Link2Icon, Link2 } from "lucide-react"
import { FormEvent } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"
import { Button } from "../../components/button"

interface CreateNewLinkModalProps {
    closeCreateNewLinkModal: () => void
}

export function CreateNewLinkModal({closeCreateNewLinkModal}: CreateNewLinkModalProps) {
    const { tripId } = useParams()
    
    async function createNewLink(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const title = data.get('linkName')?.toString()
        const url = data.get('url')?.toString()

        api.post(`/trips/${tripId}/links`, {
            title,
            url
        })

        closeCreateNewLinkModal()
    }

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 w-[640px] py-5 px-6 shadow-shape rounded-xl space-y-5">

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Cadastrar Link</h2>
                <button type='button' onClick={closeCreateNewLinkModal}>
                    <X className="size-5 text-zinc-400"/>
                </button>
                </div>
            </div>

            <form onSubmit={createNewLink} className="space-y-3">
                <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                    <Tag className="text-zinc-400 size-5"/>
                    <input name="linkName" className="outline-none bg-transparent flex-1" placeholder="Nome para o link:"/>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-14 flex-1 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                        <Link2 className="text-zinc-400 size-5"/>
                        <input type="url" name="url" className="outline-none bg-transparent flex-1" placeholder="URL"/>
                    </div>
                </div>
                <Button type="submit" size="full">
                    Salvar novo link
                </Button>
            </form>
            </div>
        </div>
    )
}