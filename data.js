const todoData = {
    "chapter3": {
        "title": "Chapter 3: Algoritmalar ve Karmaşıklık",
        "sections": {
            "graph-algorithms": {
                "title": "3.5 Graph Algorithms",
                "items": [
                    {
                        "id": "bfs-dfs",
                        "text": "BFS ve DFS Algoritmaları",
                        "description": "Graf teoride temel kavramlar olan Genişlik Öncelikli Arama (BFS) ve Derinlik Öncelikli Arama (DFS) algoritmaları",
                        "subItems": [
                            {
                                "id": "bfs",
                                "text": "3.5.1 Breadth-First Search (BFS)"
                            },
                            {
                                "id": "dfs",
                                "text": "3.5.2 Depth-First Search (DFS)"
                            }
                        ]
                    }
                ]
            },
            "minimum-weight": {
                "title": "3.7 Minimum Weight",
                "items": [
                    {
                        "id": "mst-algorithms",
                        "text": "Minimum Spanning Tree Algoritmaları",
                        "description": "MST bulma algoritmaları ve özellikleri",
                        "subItems": [
                            {
                                "id": "prims",
                                "text": "Prim's MST Algoritması: Greedy yaklaşımla minimum ağırlıklı spanning tree bulma"
                            },
                            {
                                "id": "kruskal",
                                "text": "Kruskal Algoritması: Edge sort edip minimum subtree oluşturma"
                            },
                            {
                                "id": "unique-weights",
                                "text": "Ağırlıklar unique olduğunda spanning tree'nin uniqueliği"
                            }
                        ]
                    }
                ]
            },
            "complexity": {
                "title": "3.8 Complexity",
                "items": [
                    {
                        "id": "reduction",
                        "text": "Reduction ve İspat",
                        "description": "3.8.2 Graph problemlerinin zorluk dereceleri ve reduction teknikleri",
                        "subItems": [
                            {
                                "id": "parallel",
                                "text": "3.11 Paralel İşlemler (İşlenmedi)"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "chapter4": {
        "title": "Chapter 4: Analysis of Complex Networks",
        "sections": {
            "degree-sequence": {
                "title": "4.2 Degree Sequence",
                "items": [
                    {
                        "id": "degree-sequence-main",
                        "text": "Degree Sequence (Derece Dizisi)",
                        "description": "Grafikteki nodların derecelerinin sıralanması ve topoloji analizi",
                        "subItems": []
                    }
                ]
            },
            "clustering": {
                "title": "4.3.1 Clustering Coefficient",
                "items": [
                    {
                        "id": "clustering-main",
                        "text": "Clustering Coefficient Hesaplama",
                        "description": "Nodların etrafındaki komşu nodların bağlantı yoğunluğu ölçümü ve kolay hesaplama yöntemi",
                        "subItems": []
                    }
                ]
            },
            "matching": {
                "title": "4.4 Matching Index",
                "items": [
                    {
                        "id": "matching-main",
                        "text": "Matching Index",
                        "description": "İki nodun ortak komşularının sayısının total komşu sayısına oranı ve topolojik benzerlik ölçümü",
                        "subItems": []
                    }
                ]
            },
            "preferential": {
                "title": "4.7.2 Preferential Attachment",
                "items": [
                    {
                        "id": "pref-attachment",
                        "text": "Preferential Attachment Rule",
                        "description": "Derecesi yüksek olan nodlara bağlanma olasılığı ve scale-free networkler",
                        "subItems": [
                            {
                                "id": "vertex-degree",
                                "text": "Vertex Degree: Nodların bağlantı sayısı"
                            },
                            {
                                "id": "all-degrees",
                                "text": "Tüm Dereceler: Scale-free ağ yapısı analizi"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "chapter5": {
        "title": "Chapter 5: Distance and Centrality",
        "sections": {
            "distances": {
                "title": "5.2 Distances and Algorithms",
                "items": [
                    {
                        "id": "dijkstra-main",
                        "text": "Dijkstra Algoritması",
                        "description": "Dijkstra algoritmasının çalışma mantığı ve prensipleri",
                        "subItems": [
                            {
                                "id": "distance-vectors",
                                "text": "Distance Vektörlerin Bulunması"
                            },
                            {
                                "id": "all-pairs",
                                "text": "All-Pairs Shortest Path ve Floyd-Warshall Algoritması"
                            }
                        ]
                    }
                ]
            },
            "centrality": {
                "title": "5.3 Centrality Metrics",
                "items": [
                    {
                        "id": "centrality-main",
                        "text": "Centrality Ölçümleri",
                        "description": "Nodların ve edge'lerin önem ölçümleri",
                        "subItems": [
                            {
                                "id": "degree-centrality",
                                "text": "Degree Centrality: Bağlantı sayısı bazlı önem"
                            },
                            {
                                "id": "closeness",
                                "text": "Closeness Centrality: 1/Distance toplamı ile uzaklık ölçümü"
                            },
                            {
                                "id": "betweenness",
                                "text": "Betweenness Centrality: Shortest path'lerde bulunma sıklığı"
                            }
                        ]
                    }
                ]
            }
        }
    }
}; 