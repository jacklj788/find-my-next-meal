const baseProps = {
  viewBox: "0 0 512 512",
  fill: "currentColor",
  "aria-hidden": true,
};

function BowlBase() {
  return (
    <>
      <path d="M138 10v30h371V0L138 10Z" />
      <path d="M3 216v16c0 63 24 122 69 166 23 23 50 40 79 52v61h173v-61c30-12 57-29 80-52 44-44 68-103 68-166v-16H3Zm292 267H180v-28c18 5 38 8 58 8s39-3 57-8v28Zm88-105c-37 37-89 60-146 60S129 415 92 378c-35-35-57-82-60-134h411c-3 52-25 99-60 134Z" />
    </>
  );
}

export function RamenNoodlesShort({ className = "h-6 w-6", ...props }) {
  return (
    <svg {...baseProps} className={className} {...props}>
      <BowlBase />
      <path d="M317 61c0-8-7-15-15-15s-14 7-14 15v7h-24v-7c0-8-7-15-15-15s-14 7-14 15v7h-24v-7c0-8-7-15-15-15s-14 7-14 15v7h-45v31l45 1v76h29v-76l24 1v75h29v-74l24 1v73h29v-72l192 5V68H317v-7Z" />
    </svg>
  );
}

export function RamenNoodlesMedium({ className = "h-6 w-6", ...props }) {
  return (
    <svg {...baseProps} className={className} {...props}>
      <BowlBase />
      <path d="M317 61c0-8-7-15-15-15s-14 7-14 15v7h-24v-7c0-8-7-15-15-15s-14 7-14 15v7h-24v-7c0-8-7-15-15-15s-14 7-14 15v7h-45v31l45 1v116h29V100l24 1v115h29V102l24 1v113h29V103l192 5V68H317v-7Z" />
    </svg>
  );
}

export function RamenNoodlesLong({ className = "h-6 w-6", ...props }) {
  return (
    <svg {...baseProps} className={className} {...props}>
      <BowlBase />
      <path d="M317 61c0-8-7-15-15-15s-14 7-14 15v7h-24v-7c0-8-7-15-15-15s-14 7-14 15v7h-24v-7c0-8-7-15-15-15s-14 7-14 15v7h-45v31l45 1v156h29V100l24 1v155h29V102l24 1v153h29V103l192 5V68H317v-7Z" />
    </svg>
  );
}