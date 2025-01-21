const todoData = {
    "q1_clustering": {
        "title": "Soru 1: Clustering (20 puan)",
        "sections": {
            "complexity_analysis": {
                "title": "Cluster Metrikleri ve Karmaşıklık Analizi",
                "items": [
                    {
                        "id": "cluster-metrics",
                        "text": "1.a) Cluster Metrikleri Karmaşıklık Analizi (7 puan)",
                        "description": "n elemanlı bir cluster için Centroid, Radius ve Diameter hesaplamalarının asimptotik karmaşıklık analizi.",
                        "subItems": [
                            {
                                "id": "centroid-calc",
                                "text": "Centroid Hesaplama",
                                "description": "n elemanlı clusterdaki her noktanın koordinatlarının ortalamasını alma işlemi - O(n) karmaşıklık."
                            },
                            {
                                "id": "radius-calc",
                                "text": "Radius Hesaplama",
                                "description": "Centroid'den en uzak noktayı bulma işlemi - Her nokta için centroid'e uzaklık hesabı - O(n) karmaşıklık."
                            },
                            {
                                "id": "diameter-calc",
                                "text": "Diameter Hesaplama",
                                "description": "Cluster içindeki en uzak iki noktayı bulma - Her nokta çifti için uzaklık hesabı - O(n²) karmaşıklık."
                            }
                        ]
                    },
                    {
                        "id": "algorithm-comparison",
                        "text": "1.b) Clustering Algoritmaları Karmaşıklık Karşılaştırması (7 puan)",
                        "description": "k: cluster sayısı, n: kayıt sayısı, t: iterasyon sayısı parametreleri için en kötü durum karmaşıklıkları.",
                        "subItems": [
                            {
                                "id": "agglomerative",
                                "text": "Agglomerative Clustering",
                                "description": "Her adımda en yakın iki cluster'ı birleştirme - O(n³) karmaşıklık (mesafe matrisi hesaplama ve güncelleme)."
                            },
                            {
                                "id": "kmeans",
                                "text": "K-Means Clustering",
                                "description": "Her iterasyonda her nokta için en yakın centroid'i bulma - O(k*n*t) karmaşıklık."
                            },
                            {
                                "id": "kmedoid",
                                "text": "K-Medoid Clustering",
                                "description": "Her iterasyonda her medoid için tüm noktalarla mesafe hesabı - O(k*n²*t) karmaşıklık."
                            }
                        ]
                    },
                    {
                        "id": "kmedoid-nonconvex",
                        "text": "1.c) K-Medoid ve Non-convex Kümeler (6 puan)",
                        "description": "K-Medoid algoritmasının non-convex şekilli kümeleri temsil edebilme yeteneği analizi.",
                        "subItems": [
                            {
                                "id": "convex-definition",
                                "text": "Convex/Non-convex Tanımı",
                                "description": "Konveks kümelerde herhangi iki nokta arasındaki doğru parçası kümenin içinde kalır."
                            },
                            {
                                "id": "kmedoid-capability",
                                "text": "K-Medoid Yeteneği",
                                "description": "K-Medoid, medoid noktaları kullanarak non-convex kümeleri temsil edebilir - İfade yanlıştır."
                            }
                        ]
                    }
                ]
            }
        }
    },
    "q2_neural_networks": {
        "title": "Soru 2: Neural Networks (15 puan)",
        "sections": {
            "delta_rule": {
                "title": "Delta Training Rule Analizi",
                "items": [
                    {
                        "id": "delta-rule-analysis",
                        "text": "2.a) Delta Training Rule ve Hata Minimizasyonu (7 puan)",
                        "description": "Delta Training Rule'un Perceptron öğrenmesinde hata minimizasyonu etkisi analizi.",
                        "subItems": [
                            {
                                "id": "error-minimization",
                                "text": "Hata Minimizasyonu Garantisi",
                                "description": "Delta Rule her zaman hata sayısını minimize etmez - Lokal minimumlara takılabilir."
                            },
                            {
                                "id": "convergence",
                                "text": "Yakınsama Analizi",
                                "description": "Lineer ayrılabilir problemlerde yakınsama garantisi vardır, diğer durumlarda yoktur."
                            }
                        ]
                    }
                ]
            }
        }
    },
    "q3_decision_trees": {
        "title": "Soru 3: Decision Trees (30 puan)",
        "sections": {
            "id3_analysis": {
                "title": "ID3 Algoritması Analizi",
                "items": [
                    {
                        "id": "tree-size-bias",
                        "text": "3.a) ID3 ve Ağaç Boyutu Biası (7 puan)",
                        "description": "ID3 algoritmasının küçük ağaçları tercih etme eğilimi analizi.",
                        "subItems": [
                            {
                                "id": "bias-analysis",
                                "text": "Bias Analizi",
                                "description": "ID3 her zaman küçük ağaçları tercih etmez - Information Gain'e göre seçim yapar."
                            },
                            {
                                "id": "performance-relation",
                                "text": "Performans İlişkisi",
                                "description": "Ağaç büyüdükçe öğrenme artar fakat genelleme performansı düşebilir."
                            }
                        ]
                    },
                    {
                        "id": "information-gain",
                        "text": "3.b) Information Gain Heuristic Biası (8 puan)",
                        "description": "Information Gain'in az değer alan özellikleri tercih etme eğilimi.",
                        "subItems": [
                            {
                                "id": "value-preference",
                                "text": "Değer Tercihi",
                                "description": "Az değer alan özellikler daha yüksek information gain üretme eğilimindedir."
                            },
                            {
                                "id": "bias-impact",
                                "text": "Bias Etkisi",
                                "description": "Bu bias, gereksiz karmaşık ağaçların oluşmasını engelleyebilir."
                            }
                        ]
                    },
                    {
                        "id": "hypothesis-space",
                        "text": "3.c) Hipotez Uzayı Bias Oranları (15 puan)",
                        "description": "ID3 ve Inductive Learning için hipotez uzayı bias oranı formülasyonu.",
                        "subItems": [
                            {
                                "id": "id3-formula",
                                "text": "ID3 Formülasyonu",
                                "description": "i: girdi sayısı, v: değer sayısı için formülasyon adımları."
                            },
                            {
                                "id": "inductive-formula",
                                "text": "Inductive Learning Formülasyonu",
                                "description": "i: girdi sayısı, v: değer sayısı için formülasyon adımları."
                            }
                        ]
                    }
                ]
            }
        }
    },
    "q4_neural_networks_advanced": {
        "title": "Soru 4: Neural Networks İleri Konular (30 puan)",
        "sections": {
            "optimization": {
                "title": "Optimizasyon Teknikleri",
                "items": [
                    {
                        "id": "error-functions",
                        "text": "4.a) Hata Minimizasyon Fonksiyonları (7 puan)",
                        "description": "İki farklı hata minimizasyon fonksiyonunun kullanım nedenleri.",
                        "subItems": [
                            {
                                "id": "function-differences",
                                "text": "Fonksiyon Farklılıkları",
                                "description": "Her fonksiyonun farklı öğrenme karakteristikleri ve avantajları vardır."
                            }
                        ]
                    },
                    {
                        "id": "momentum-term",
                        "text": "4.b) Momentum Term Kullanımı (8 puan)",
                        "description": "Momentum teriminin ağırlık güncellemelerindeki rolü.",
                        "subItems": [
                            {
                                "id": "momentum-purpose",
                                "text": "Kullanım Amacı",
                                "description": "Lokal minimumlardan kaçınma ve öğrenme hızını artırma."
                            }
                        ]
                    },
                    {
                        "id": "penalty-term",
                        "text": "4.c) Penalty Term Kullanımı (8 puan)",
                        "description": "Penalty teriminin hata fonksiyonundaki rolü.",
                        "subItems": [
                            {
                                "id": "penalty-purpose",
                                "text": "Kullanım Amacı",
                                "description": "Aşırı öğrenmeyi (overfitting) önleme ve genelleme yeteneğini artırma."
                            }
                        ]
                    }
                ]
            }
        }
    },
    "q5_other_algorithms": {
        "title": "Soru 5: Diğer Öğrenme Algoritmaları (10 puan)",
        "sections": {
            "theory": {
                "title": "Teorik Kavramlar",
                "items": [
                    {
                        "id": "information-theory",
                        "text": "5.a) Information Theory Perspektifi (5 puan)",
                        "description": "Occam's Razor ve MDL prensiplerinin karşılaştırması.",
                        "subItems": [
                            {
                                "id": "principle-comparison",
                                "text": "Prensip Karşılaştırması",
                                "description": "Her iki prensip de basit modelleri tercih eder, ancak MDL bunu bilgi teorisi açısından formüle eder."
                            }
                        ]
                    },
                    {
                        "id": "curse-dimensionality",
                        "text": "5.c) Curse of Dimensionality (5 puan)",
                        "description": "Lazy Learning'de boyut lanetinin nedenleri.",
                        "subItems": [
                            {
                                "id": "dimension-effects",
                                "text": "Boyut Etkileri",
                                "description": "Boyut arttıkça veri noktaları arasındaki mesafeler anlamsızlaşır ve örnek sayısı yetersiz kalır."
                            }
                        ]
                    }
                ]
            }
        }
    },
    "q6_heuristics": {
        "title": "Soru 6: Decision Tree Heuristics (20 puan)",
        "sections": {
            "binary_trees": {
                "title": "Binary Trees ve Heuristikler",
                "items": [
                    {
                        "id": "tree-analysis",
                        "text": "Binary Tree Sayısı Analizi",
                        "description": "n düğümlü binary tree sayısının asimptotik tahmini.",
                        "subItems": [
                            {
                                "id": "conversion-principle",
                                "text": "Dönüşüm Prensibi",
                                "description": "Her ağacın binary tree'ye dönüştürülebilme özelliği."
                            },
                            {
                                "id": "asymptotic-formula",
                                "text": "Asimptotik Formül",
                                "description": "n düğüm için olası binary tree sayısının Catalan sayıları ile ilişkisi."
                            }
                        ]
                    }
                ]
            }
        }
    }
};
