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
                        "description": "Bu, graf (graph) teoride temel kavramlar olan Genişlik Öncelikli Arama (BFS) ve Derinlik Öncelikli Arama (DFS) algoritmalarının anlatıldığı kısımları işaret eder. İlgili bölümler kitapta 3.5.1 ve 3.5.2'de bulunmaktadır.",
                        "subItems": [
                            {
                                "id": "bfs",
                                "text": "3.5.1 Breadth-First Search (BFS) - Genişlik Öncelikli Arama",
                                "description": "Genişlik Öncelikli Arama algoritması, bir grafı seviye seviye dolaşarak arama yapan temel bir graph algoritmasıdır. İlgili bölüm kitapta 3.5.1'de detaylı olarak anlatılmaktadır."
                            },
                            {
                                "id": "dfs",
                                "text": "3.5.2 Depth-First Search (DFS) - Derinlik Öncelikli Arama",
                                "description": "Derinlik Öncelikli Arama algoritması, bir grafı mümkün olduğunca derine inerek dolaşan temel bir graph algoritmasıdır. İlgili bölüm kitapta 3.5.2'de detaylı olarak anlatılmaktadır."
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
                        "description": "Bu ifade, minimum ağırlıklı spanning tree'leri (MST) bulma algoritmalarına ve bu algoritmaların temel özelliklerine atıfta bulunur. Kitapta 3.7 bölümünde detaylı olarak anlatılmaktadır.",
                        "subItems": [
                            {
                                "id": "prims",
                                "text": "Prim's MST Algoritması",
                                "description": "Bir grafikteki tüm nodları birleştiren ve toplam kenar ağırlığı minimum olan spanning tree'yi bulmak için kullanılan açgözlü (greedy) bir algoritmadır. İlgili kısım kitapta 3.7 bölümünde detaylandırılmıştır."
                            },
                            {
                                "id": "kruskal",
                                "text": "Kruskal Algoritması",
                                "description": "Kruskal algoritması, kenarları ağırlıklarına göre sıralayarak ve döngü (cycle) oluşturmayacak şekilde spanning tree oluşturur. İlgili kısım kitapta 3.7 bölümünde anlatılmıştır."
                            },
                            {
                                "id": "unique-weights",
                                "text": "Unique Ağırlıklar Durumu",
                                "description": "Bu ifade, bir graphdaki tüm edge'lerin ağırlıkları unique (tek) ise, spanning tree'nin de unique olacağı anlamına gelir."
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
                        "description": "Bu ifade, sınavda 'reduction' teknikleri ve graph problemlerinin zorluk derecelerini belirlemek veya ispatlamak için sorular sorulabileceğini ifade eder. İlgili kısım kitapta 3.8.2 bölümünde detaylandırılmıştır.",
                        "subItems": [
                            {
                                "id": "parallel",
                                "text": "3.11 Paralel İşlemler (İşlenmedi)",
                                "description": "Bu not, paralel algoritmalar konusu işlenmedi anlamına gelir. Kitabın 3.11 bölümünde genel olarak bu konuda bilgi verilmektedir."
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
                        "description": "Bir grafikteki nodların derecelerinin azalan veya artan şekilde sıralanmış halidir. Grafın yapısı ve topolojisi hakkında bilgi verir. İlgili bölüm kitapta 4.2'de anlatılmıştır."
                    }
                ]
            },
            "clustering": {
                "title": "4.3.1 Clustering Coefficient",
                "items": [
                    {
                        "id": "clustering-main",
                        "text": "Clustering Coefficient Daha Kolay Nasıl Hesaplanıyor Bilin",
                        "description": "Bir nodun etrafındaki komşu nodların kendi aralarındaki bağlantı yoğunluğunu ölçen kümeleme katsayısının (clustering coefficient) nasıl daha kolay hesaplandığını ifade eder. Kitapta 4.3.1 bölümünde detaylıca anlatılmıştır."
                    }
                ]
            },
            "matching": {
                "title": "4.4 Matching Index",
                "items": [
                    {
                        "id": "matching-main",
                        "text": "Matching Index",
                        "description": "İki nodun ortak komşularının sayısının, total komşu sayısına oranını gösteren ve nod benzerliği ölçmek için kullanılan bir metriktir. Nodların topolojik olarak ne kadar benzer olduğunu gösterir. Kitapta 4.4 bölümünde anlatılmıştır."
                    }
                ]
            },
            "preferential": {
                "title": "4.7.2 Preferential Attachment",
                "items": [
                    {
                        "id": "pref-attachment",
                        "text": "Preferential Attachment Rule Deprecesi Yüksek Olanın Başlama Olasılığı",
                        "description": "Tercihli bağlanma kuralını anlatır. Yeni nodların, derecesi yüksek nodlara bağlanma olasılığının yüksek olduğu bu kural, scale-free networklerin oluşumunu anlamada önemlidir. Kitapta 4.9 bölümünde anlatılmıştır.",
                        "subItems": [
                            {
                                "id": "vertex-degree",
                                "text": "Vertex Degree (Nod Derecesi)",
                                "description": "Bir nodun sahip olduğu bağlantı sayısını gösterir. Bu metrik, nodun ağdaki doğrudan bağlantılarının sayısını ölçer."
                            },
                            {
                                "id": "all-degrees",
                                "text": "Tüm Dereceler",
                                "description": "Grafteki tüm nodların derecelerine atıfta bulunur ve scale-free ağlar gibi yapıları anlamada kullanılır. Bu analiz, ağın genel yapısı hakkında önemli bilgiler sağlar."
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
                        "description": "Dijkstra algoritmasının nasıl çalıştığını ve temel prensiplerini bilmeniz gerektiğini belirtir. Kitapta 5.2.2 bölümünde detaylıca anlatılmıştır.",
                        "subItems": [
                            {
                                "id": "distance-vectors",
                                "text": "Distance Vektörler Nasıl Bulunuyor?",
                                "description": "Mesafe vektörlerinin nasıl elde edildiği ve kullanıldığı konularına atıfta bulunur. Bu vektörler, bir noddan diğer tüm nodlara olan en kısa mesafeleri içerir."
                            },
                            {
                                "id": "shortest-path",
                                "text": "Shortest Path Kavramları",
                                "description": "En kısa yol ile ilgili temel kavramlar. Bu kısım, iki nod arasındaki en kısa mesafeyi bulma yöntemlerini içerir."
                            },
                            {
                                "id": "all-pairs",
                                "text": "All-Pairs Shortest Path",
                                "description": "Tüm nod çiftleri arasındaki en kısa mesafenin hesaplanması durumunda (all-pairs shortest path) bu bilginin nasıl kullanılacağını açıklar. İlgili kısım kitapta 5.2.3 bölümünde Floyd-Warshall algoritması ile anlatılmıştır."
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
                        "description": "Bir networkdeki nodların veya edge'lerin önemini ölçmek için kullanılan metrikler. Kitapta 4.5 ve 5.3 bölümlerinde bahsedilmiştir.",
                        "subItems": [
                            {
                                "id": "degree-centrality",
                                "text": "Degree Centrality",
                                "description": "Bir nodun kaç bağlantıya sahip olduğunu gösterir. Bu metrik, nodun ağdaki doğrudan etkisini ölçer."
                            },
                            {
                                "id": "closeness",
                                "text": "Closeness Centrality",
                                "description": "Bir nodun diğer tüm nodlara olan ortalama uzaklığını ölçer. Kitapta 5.3.2 bölümünde anlatılmıştır. 1/Distance toplamı ile hesaplanır ve nodun ağdaki merkezi konumunu gösterir."
                            },
                            {
                                "id": "betweenness",
                                "text": "Betweenness Centrality",
                                "description": "Bir nodun ne kadar fazla shortest pathte yer aldığını ölçer. Kitapta 5.3.4 bölümünde anlatılmıştır.",
                                "subItems": [
                                    {
                                        "id": "shortest-paths-order",
                                        "text": "Shortest Pathlerin Kullanım Sırası",
                                        "description": "Betweenness Centrality'yi hesaplarken tüm en kısa yolların nasıl dikkate alınması gerektiğini ve bu yolların hangi sırayla işleneceğini anlatır."
                                    },
                                    {
                                        "id": "shortest-paths-all",
                                        "text": "Tüm Shortest Pathlerin Sırası",
                                        "description": "Tüm en kısa yolların hesaplanması ve kullanılması sürecini açıklar. Bu, Betweenness Centrality hesaplamasının önemli bir parçasıdır."
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