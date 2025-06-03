# Week 1 – MongoDB: Data Layer Fundamentals

This repo holds my work for the **MongoDB Fundamentals** assignment.  
It covers setup, CRUD, advanced queries, aggregation, and indexing.

## 1. Prerequisites
| Tool | Version |
|------|---------|
| Node.js | 18 or higher |
| Git | any recent |
| MongoDB | Local Community Edition **or** free Atlas cluster |
| MongoDB Shell (`mongosh`) | bundled with MongoDB |

## 2. Project Structure
| File / Folder | Purpose |
|---------------|---------|
| `insert_books.js` | Script that loads sample book data |
| `queries.js` | All required MongoDB queries (Tasks 2 → 5) |
| `README.md` | This guide |
| `Screenshot/screenshot.png` | Proof of data in Compass / Atlas |

## 3. Setup & Data Load
```bash
# 1  Clone your classroom repo
git clone <your-repo-url>
cd <repo>

# 2  Install dependencies
npm install            # installs mongodb driver

# 3  Edit connection string (if using Atlas)
#    open insert_books.js and replace the uri value
#    uri = "mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net"

# 4  Load the sample data
node insert_books.js
