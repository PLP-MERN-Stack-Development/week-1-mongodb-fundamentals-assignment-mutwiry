//Basic CRUD operations

// 1. Find all books in a genre
db.books.find({ genre: "Fantasy" })

// 2. Books published after 2000
db.books.find({ published_year: { $gt: 2000 } })

// 3. Books by an author
db.books.find({ author: "George Orwell" })

// 4. Update price of one book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 11.99 } }
)

// 5. Delete by title
db.books.deleteOne({ title: "Moby Dick" })

//Advanced Queries

// A. In-stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// B. Projection (title, author, price only)
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 })

// C. Sort by price
db.books.find().sort({ price: 1 })   // ascending
db.books.find().sort({ price: -1 })  // descending

// D. Pagination (page 2, 5 per page)
db.books.find().skip(5).limit(5)

//Aggregation pipeline

// 1. Average price by genre
db.books.aggregate([
    { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
  ])
  
  // 2. Author with most books
  db.books.aggregate([
    { $group: { _id: "$author", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 1 }
  ])
  
  // 3. Group by decade
  db.books.aggregate([
    { $project: {
        decade: { $concat: [
          { $substr: ["$published_year", 0, 3] }, "0s"
        ]}
      }},
    { $group: { _id: "$decade", total: { $sum: 1 } } },
    { $sort: { _id: 1 } }
  ])
  
  //Indexing
  
  // Single-field
db.books.createIndex({ title: 1 })

// Compound
db.books.createIndex({ author: 1, published_year: -1 })

// Explain plan (check “IXSCAN”)
db.books.find({ title: "The Hobbit" }).explain("executionStats")
