export const isoToDateComplete = (dateIso: string) => {
    const date = new Date(dateIso)
    const dateFormat = date.toLocaleString('pt-br', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

    return dateFormat
}