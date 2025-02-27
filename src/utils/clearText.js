/**
 * Ф-ция очищает текст от лишних символов (тэгов html) и отдает готовый текст.
 * Второй параметр - ограничение колличества символов.
 */
export const onlyText = (_string, limit = null) => {
	let result = _string
		.replace(/<[^>]+>/g, '')
		.replace(/&[^;]+./g, ' ')
		.replace(
			/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
			''
		)

	if (limit) result = result.slice(0, limit) + '...'

	return result
}
