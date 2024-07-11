import { useEffect, SetStateAction, Dispatch } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"
import { format } from "date-fns"
import {ptBR} from 'date-fns/locale'

interface ActivitiesProps {
    activities: Activity[]
    setActivities: Dispatch<SetStateAction<Activity[]>>
}

export default function Activities({activities, setActivities}: ActivitiesProps) {
    const { tripId } = useParams()
    console.log(activities);
    

    useEffect(() => {
        api.get(`/trips/${tripId}/activities`).then(response => setActivities(response.data.activities))
    }, [tripId])
    
    return (
        <div className="space-y-8">
            {activities.map((category: Activity)=>{
                return (
                    <div key={category.date} className="space-y-2.5">
                        <div className="flex gap-2 items-baseline">
                            <span className="font-semibold text-xl text-zinc-300">Dia {format(category.date, 'd')}</span>
                            <span className="text-xs text-zinc-500">{format(category.date, 'EEEE', {locale: ptBR})}</span>
                        </div>
                        {category.activities.length > 0 ? (
                            <div className="space-y-1.5">
                                {category.activities.map((activity)=>{
                                    return (
                                        <div key={activity.id} className="px-4 py-2.5 bg-zinc-900 shadow-shape rounded-xl flex items-center gap-10">
                                            <p className="text-zinc-500 text-sm">{activity.title}</p>
                                            <span className="text-sm text-zinc-400 ml-auto">{format(activity.occurs_at, 'HH:mm')}h</span>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
                        )}
                    </div>
                )
            })}
        </div>
    )
}