import For from "../other/For";

export default function AdminAlert() {
    return (
        <For role="admin">
            <div
                className="border_info info maw500 tac p15 brL wfc por cx mr30 mb30"
            >
                admin cannot mark messages as "read" to prevent coaches / support from losing their notifications...
            </div>
        </For>
    )
}
