import { Calendar, Tag, X } from "lucide-react"
import { Button } from "../../components/button"
import { FormEvent } from "react"

interface CreateActivityModalProps{
    closeCreateActivityModal: () => void
    createActivity: (event: FormEvent<HTMLFormElement>) => void
}

export function CreateActivityModal({closeCreateActivityModal, createActivity}: CreateActivityModalProps) {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 w-[640px] py-5 px-6 shadow-shape rounded-xl space-y-5">

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                <button type='button' onClick={closeCreateActivityModal}>
                    <X className="size-5 text-zinc-400"/>
                </button>
                </div>
                <p className="text-zinc-400 text-sm">
                    Todos convidados podem visualizar as atividades.
                </p>
            </div>

            <form onSubmit={createActivity} className="space-y-3">
                <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                    <Tag className="text-zinc-400 size-5"/>
                    <input name="title" className="outline-none bg-transparent flex-1" placeholder="Qual a atividade?"/>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-14 flex-1 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                        <Calendar className="text-zinc-400 size-5"/>
                        <input type="datetime-local" name="occurs_at" className="outline-none bg-transparent flex-1" placeholder="Data e horário da atividade"/>
                    </div>
                </div>
                <Button type="submit" size="full">
                    Salvar atividade
                </Button>
            </form>
            </div>
        </div>
    )
}