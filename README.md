### Tạo 1 `workspace` mới

```
npx create-nx-workspace@latest
```

### Tạo 1 `package` mới

```
nx g npm-package utils
```

### Chạy 1 `script` trong `packages`

```
nx test utils
```

### Xem `graph` các `package` trong dự án

```
nx graph
```

### Chạy `test` trong tất cả các dự án

```
nx run-many --target=test --all
```

Thông thường, `run test` các project khác nhau có thể chạy độc lập, nhưng với `build` thì không thể.
Ví dụ, `composables` có `dependency` là `utils` thì khi `build`, `utils` phải được `build` trước `composables`.

Với `nx` chúng ta không cần quan tâm đến việc đó, `nx` sẽ tự động làm điều đó.

```
nx run-many --target=build --all
```

### `NX` biết package nào `affected` (bị ảnh hưởng)

```
nx run-many --target=test --all
```

Lúc này `nx` sẽ `cache` lại kết quả.

Bây giờ trong file `packages/composables/index.js` ta thêm 1 dòng `console.log('hello world')`

Tiếp theo, chúng ta chạy

```
nx affected --target=test
```

Ở đây, chúng ta thấy `nx` chỉ chạy test trong `composables` và dữ liệu `test` trong `utils` được lấy từ `cache`.
