# DB

## cration of DB
```sql
CREATE SCHEMA `edms_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
```
* 📦 Character set = l’alphabet disponible: “Quels symboles ma base peut-elle contenir ?”
* 📚 Collation = les règles de classement et de comparaison: “Comment comparer deux textes ?”

Exemples:
- *ascii* → seulement lettres anglaises de base
- *latin1* → caractères d’Europe de l’Ouest
- *utf8 / utf8mb4* → presque tous les caractères Unicode (emojis, alphabets du monde, etc.)(le plus complet)
