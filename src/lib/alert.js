import Swal from "sweetalert2";

// Alert sukses
export const alertSuccess = (
  title = "Berhasil",
  text = "Aksi berhasil dilakukan."
) => {
  Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonColor: "#16a34a",
  });
};

// Alert gagal
export const alertError = (title = "Gagal", text = "Terjadi kesalahan.") => {
  Swal.fire({
    icon: "error",
    title,
    text,
    confirmButtonColor: "#d33",
  });
};
