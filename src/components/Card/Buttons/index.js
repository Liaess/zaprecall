import { JustLearned, DontRemember, BarelyRemember, Zap } from "../cardWrapper";

export default function Buttons({ selectedChoice }) {
  return (
    <>
      <JustLearned onClick={() => selectedChoice("JustLearned")}>
        Aprendi agora
      </JustLearned>
      <DontRemember onClick={() => selectedChoice("DontRemember")}>
        Não lembrei
      </DontRemember>
      <BarelyRemember onClick={() => selectedChoice("BarelyRemember")}>
        Lembrei com esforço
      </BarelyRemember>
      <Zap onClick={() => selectedChoice("Zap")}>Zap!</Zap>
    </>
  );
}
