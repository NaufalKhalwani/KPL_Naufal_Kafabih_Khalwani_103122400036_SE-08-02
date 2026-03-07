let print = console.log

const visit = ["Jogja", "Solo", "Semarang"]

visit.push("Magelang")
visit.unshift("Tegal")

// visit.reverse()
visit.pop()
visit.shift()
visit.splice(0,1)

visit[1] = "Jakarta"

print(visit)
