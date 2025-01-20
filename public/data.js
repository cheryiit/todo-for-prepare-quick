const todoData = {
    "chapter3": {
        "title": "Chapter 3: Algoritmalar ve Karmaşıklık",
        "sections": {
            "graph-algorithms": {
                "title": "3.5 Graph Algorithms",
                "items": [
                    {
                        "id": "bfs-dfs",
                        "text": "BFS ve DFS Algoritmalarına Kadar Geldik",
                        "description": "Graf (graph) teoride temel kavramlar olan Genişlik Öncelikli Arama (BFS) ve Derinlik Öncelikli Arama (DFS) algoritmaları",
                        "subItems": [
                            {
                                "id": "bfs",
                                "text": "3.5.1 Breadth-First Search (BFS) - Genişlik Öncelikli Arama"
                            },
                            {
                                "id": "dfs",
                                "text": "3.5.2 Depth-First Search (DFS) - Derinlik Öncelikli Arama"
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
                        "text": "Minimum Spanning Tree (MST) Algoritmaları",
                        "description": "Minimum ağırlıklı spanning tree'leri (MST) bulma algoritmaları ve temel özellikleri",
                        "subItems": [
                            {
                                "id": "prims",
                                "text": "Prim's MST Algoritması",
                                "description": "Bir grafikteki tüm nodları birleştiren ve toplam kenar ağırlığı minimum olan spanning tree'yi bulmak için kullanılan açgözlü (greedy) algoritma"
                            },
                            {
                                "id": "kruskal",
                                "text": "Kruskal Algoritması",
                                "description": "Kenarları ağırlıklarına göre sıralayarak ve döngü (cycle) oluşturmayacak şekilde minimum spanning tree oluşturma"
                            },
                            {
                                "id": "unique-weights",
                                "text": "Unique Ağırlıklar Durumu",
                                "description": "Bir graphdaki tüm edge'lerin ağırlıkları unique (tek) ise, spanning tree'nin de unique olacağı durumu"
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
                        "description": "3.8.2 Graph problemlerinin zorluk dereceleri ve reduction teknikleri ile ispat yöntemleri",
                        "subItems": [
                            {
                                "id": "parallel",
                                "text": "3.11 Paralel İşlemler (İşlenmedi)",
                                "description": "Paralel algoritmalar konusu işlenmedi. Kitabın 3.11 bölümünde genel bilgi bulunmaktadır"
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
                        "description": "Bir grafikteki nodların derecelerinin azalan veya artan şekilde sıralanmış hali. Grafın yapısı ve topolojisi hakkında bilgi verir"
                    }
                ]
            },
            "clustering": {
                "title": "4.3.1 Clustering Coefficient",
                "items": [
                    {
                        "id": "clustering-main",
                        "text": "Clustering Coefficient Hesaplama",
                        "description": "Bir nodun etrafındaki komşu nodların kendi aralarındaki bağlantı yoğunluğunu ölçen kümeleme katsayısının (clustering coefficient) kolay hesaplama yöntemi"
                    }
                ]
            },
            "matching": {
                "title": "4.4 Matching Index",
                "items": [
                    {
                        "id": "matching-main",
                        "text": "Matching Index",
                        "description": "İki nodun ortak komşularının sayısının total komşu sayısına oranını gösteren ve nodların topolojik benzerliğini ölçen metrik"
                    }
                ]
            },
            "preferential": {
                "title": "4.7.2 Preferential Attachment",
                "items": [
                    {
                        "id": "pref-attachment",
                        "text": "Preferential Attachment Rule",
                        "description": "Tercihli bağlanma kuralı: Yeni nodların, derecesi yüksek nodlara bağlanma olasılığının yüksek olduğu, scale-free networklerin oluşumunu açıklayan kural (Kitap 4.9)",
                        "subItems": [
                            {
                                "id": "vertex-degree",
                                "text": "Vertex Degree (Nod Derecesi)",
                                "description": "Bir nodun sahip olduğu toplam bağlantı sayısı"
                            },
                            {
                                "id": "all-degrees",
                                "text": "Tüm Dereceler",
                                "description": "Grafteki tüm nodların dereceleri ve scale-free ağ yapısı analizi"
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
                        "description": "Dijkstra algoritmasının çalışma mantığı ve temel prensipleri (Kitap 5.2.2)",
                        "subItems": [
                            {
                                "id": "distance-vectors",
                                "text": "Distance Vektörlerin Bulunması",
                                "description": "Mesafe vektörlerinin elde edilmesi ve kullanımı"
                            },
                            {
                                "id": "shortest-path",
                                "text": "Shortest Path Kavramları",
                                "description": "En kısa yol ile ilgili temel kavramlar"
                            },
                            {
                                "id": "all-pairs",
                                "text": "All-Pairs Shortest Path",
                                "description": "Tüm nod çiftleri arasındaki en kısa mesafenin hesaplanması (Floyd-Warshall Algoritması, Kitap 5.2.3)"
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
                        "description": "Bir networkdeki nodların veya edge'lerin önemini ölçmek için kullanılan metrikler (Kitap 4.5 ve 5.3)",
                        "subItems": [
                            {
                                "id": "degree-centrality",
                                "text": "Degree Centrality",
                                "description": "Bir nodun sahip olduğu bağlantı sayısına dayalı önem ölçümü"
                            },
                            {
                                "id": "closeness",
                                "text": "Closeness Centrality",
                                "description": "Bir nodun diğer tüm nodlara olan ortalama uzaklığını ölçen metrik (1/Distance toplamı, Kitap 5.3.2)"
                            },
                            {
                                "id": "betweenness",
                                "text": "Betweenness Centrality",
                                "description": "Bir nodun ne kadar fazla shortest pathte yer aldığını ölçen metrik (Kitap 5.3.4)",
                                "subItems": [
                                    {
                                        "id": "shortest-paths-order",
                                        "text": "Shortest Pathlerin Kullanım Sırası",
                                        "description": "Betweenness Centrality hesaplanırken tüm en kısa yolların dikkate alınma sırası ve yöntemi"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
}; 