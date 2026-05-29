interface IProps {
    children?: React.ReactNode;
}

export default function Panel(props: IProps) {
    return <div className="rounded-2xl bg-secondary/20 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)] p-10 h-full border border-accent/30">
        {props.children}
    </div>
}