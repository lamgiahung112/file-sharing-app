import clsx from "clsx"

const _ = (styles: CSSModuleClasses, ...classes: string[]) => {
	return clsx(classes.map((cl) => styles[cl]))
}
export default _
