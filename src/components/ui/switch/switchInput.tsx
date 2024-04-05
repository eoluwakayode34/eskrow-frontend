import { cn } from "@/utils/cn";
import { Switch } from "@headlessui/react";

type RadioInputType = {
  openRadio: any;
  setOpenRadio: any;
  label?: string;
};

export default function RadioInput({
  openRadio,
  setOpenRadio,
  label,
}: RadioInputType) {
  return (
    <Switch.Group as={"div"}>
      {label && (
        <Switch.Label className={cn("text-primary-300")}>{label}</Switch.Label>
      )}{" "}
      <Switch as={"button"} value={openRadio} onChange={setOpenRadio}></Switch>
    </Switch.Group>
  );
}
