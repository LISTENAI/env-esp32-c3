import { Bundle } from '@lisa-env/type';
import gcc from '@binary/gcc-riscv32-esp-elf';

export default <Bundle>{
  binaries: [
    'gcc-riscv32-esp-elf',
  ],
  env: {
    ZEPHYR_TOOLCHAIN_VARIANT: 'espressif',
    ESPRESSIF_TOOLCHAIN_PATH: gcc.homeDir,
  },
};
