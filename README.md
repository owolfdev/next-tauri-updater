npm run tauri signer generate -- -w ~/.tauri/myapp.key --force

npm WARN config init.author.name Use `--init-author-name` instead.

> next-tauri-updater@0.1.0 tauri
> tauri signer generate -w /Users/wolf/.tauri/myapp.key --force

Please enter a password to protect the secret key.
Password:
Password (one more time):
Deriving a key from the password in order to encrypt the secret key... done

Your keypair was generated successfully
Private: /Users/wolf/.tauri/myapp.key (Keep it secret!)
Public: /Users/wolf/.tauri/myapp.key.pub

---

Environment variables used to sign:
`TAURI_PRIVATE_KEY` Path or String of your private key
`TAURI_KEY_PASSWORD` Your private key password (optional)

ATTENTION: If you lose your private key OR password, you'll not be able to sign your update package and updates will not work.
