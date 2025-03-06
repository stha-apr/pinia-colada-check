export function fromDTO(fromDTO) {
  return {
    ...fromDTO,
    extra: fromDTO.content + " - mit zusätzlichem Text",
    active: false,
    content: fromDTO.content + ' - bitte erledigen!'
  }
}
