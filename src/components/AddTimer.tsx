import { useRef } from "react";
import { useTimersContext } from "../store/timers-context.tsx";

import Button from "./UI/Button.tsx";
import Form, { FormHandle } from "./UI/Form.tsx";
import Input from "./UI/Input.tsx";

export default function AddTimer() {
  const form = useRef<FormHandle>(null);
  const { addTimer } = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string }; // duration: number
    addTimer({ name: extractedData.name, duration: +extractedData.duration }); // addTimer(extractedData)
    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Nome" id="name" />
      <Input type="number" label="Duração" id="duration" />
      <p>
        <Button>Adicionar temporizador</Button>
      </p>
    </Form>
  );
}
