const todoData = {
  "java_spring_interview": {
    "title": "Garanti BBVA Mülakat Hazırlığı: Java Spring",
    "sections": {
      "day1_morning": {
        "title": "Temel Java Bilgisi ve OOP Kavramları (1. Gün Sabah)",
        "items": [
          {
            "id": "java-basics",
            "text": "Java Dilinin Temelleri",
            "description": "Java programlama dilinin temel yapı taşları, sözdizimi ve özellikleri. Java'nın platform bağımsızlığı (write once, run anywhere) ve JVM mimarisi.",
            "subItems": [
              {
                "id": "data-types", 
                "text": "Veri Tipleri", 
                "description": "Primitive veri tipleri (byte, short, int, long, float, double, boolean, char) ve Referans tipleri (String, Arrays, Classes, Interfaces). Primitive ve referans tipleri arasındaki farklar, bellekte nasıl saklandıkları ve memory yönetimi özellikleri."
              },
              {
                "id": "type-casting", 
                "text": "Type Casting", 
                "description": "Implicit (otomatik) ve Explicit (manuel) tür dönüşümleri. Primitive tipler arasında, referans tipleri arasında ve aralarındaki dönüşüm kuralları."
              },
              {
                "id": "operators-control-flow", 
                "text": "Operatörler ve Kontrol Akış Mekanizmaları", 
                "description": "Aritmetik, ilişkisel, mantıksal ve bitwise operatörler. if/else, switch, ternary operatör kullanımı. for, while, do-while döngüleri ve break, continue, return ifadeleri ile akış kontrolü."
              },
              {
                "id": "arrays-strings", 
                "text": "Diziler ve String Sınıfı", 
                "description": "Tek ve çok boyutlu Array tanımlama, başlatma ve erişim. String'in Immutability özelliği ve neden değiştirilemez olduğu. String işlemleri için StringBuilder ve StringBuffer sınıflarının kullanımı ve performans farkları."
              },
              {
                "id": "methods", 
                "text": "Metotlar", 
                "description": "Method tanımlama, parametre geçişi (pass by value vs. pass by reference), method overloading (aşırı yükleme) ve method overriding (geçersiz kılma) kavramları arasındaki farklar. Statik ve statik olmayan metotlar."
              },
              {
                "id": "garbage-collection", 
                "text": "Garbage Collection", 
                "description": "JVM'in otomatik bellek yönetimi, garbage collector'ın çalışma prensibi, unreachable nesnelerin belirlenmesi ve temizlenmesi."
              }
            ]
          },
          {
            "id": "oop-principles",
            "text": "Nesne Yönelimli Programlama (OOP) Prensipleri",
            "description": "Java'nın temelini oluşturan OOP prensipleri, sınıf tasarımı ve nesne tabanlı düşünme yaklaşımı. Java'nın 'Her şey bir nesnedir' (neredeyse) felsefesi.",
            "subItems": [
              {
                "id": "classes-objects", 
                "text": "Sınıflar ve Nesneler", 
                "description": "Sınıf tanımlama, constructor (yapıcı metot) kullanımı, this keyword, instance ve class değişkenleri, metotlar, erişim belirleyiciler. Nesne oluşturma, başlatma ve kullanma."
              },
              {
                "id": "encapsulation", 
                "text": "Encapsulation (Kapsülleme)", 
                "description": "Veri ve davranışın bir sınıf içinde sarmalanması, doğrudan erişimin kısıtlanması. Erişim belirleyiciler (public, private, protected, default) ve bunların görünürlük alanları. Getter/Setter metotları ile kontrollü erişim sağlama."
              },
              {
                "id": "inheritance", 
                "text": "Inheritance (Kalıtım)", 
                "description": "Bir sınıfın başka bir sınıftan özelliklerini miras alması, kodun yeniden kullanılabilirliği. extends anahtar kelimesi, super kullanımı, 'IS-A' ilişkisi ve kalıtım hiyerarşisi. Final sınıflar ve neden kalıtılamayacağı."
              },
              {
                "id": "polymorphism", 
                "text": "Polymorphism (Çok Biçimlilik)", 
                "description": "Bir nesnenin farklı şekillerde davranabilme yeteneği. Statik (compile-time) ve Dinamik (run-time) Polymorphism. Method overloading ve overriding ile gerçekleştirme. instanceof operatörü, Upcasting/Downcasting ve Type Safety."
              },
              {
                "id": "abstraction", 
                "text": "Abstraction (Soyutlama)", 
                "description": "Karmaşıklığı yönetme mekanizması, detayların gizlenmesi ve önemli özelliklerin öne çıkarılması. abstract sınıflar/metotlar ve bunların kullanım amaçları. Interface'ler ve abstract class'lar arasındaki farklar ve ne zaman hangisinin tercih edileceği."
              },
              {
                "id": "coupling-cohesion", 
                "text": "Coupling ve Cohesion", 
                "description": "Loose coupling (gevşek bağlantı) ve high cohesion (yüksek uyum) prensiplerinin önemi. Sınıflar arası bağımlılıkları azaltmanın yolları ve iyi tasarlanmış OOP sistemlerinin özellikleri."
              }
            ]
          },
          {
            "id": "java-concepts",
            "text": "Java'da Önemli Kavramlar ve Sınıflar",
            "description": "Java'da sıkça kullanılan kavramlar, anahtar kelimeler ve temel sınıflar. Güçlü tip kontrolü ve çalışma zamanı özellikleri.",
            "subItems": [
              {
                "id": "final-keyword", 
                "text": "final Anahtar Kelimesi", 
                "description": "final değişkenler (sabitler), final metotlar (override edilemez), final sınıflar (extend edilemez). Kullanım amaçları, immutability sağlama ve güvenlik etkileri. final referanslar ve içeriklerinin değiştirilebilirliği arasındaki fark."
              },
              {
                "id": "static-keyword", 
                "text": "static Anahtar Kelimesi", 
                "description": "static değişkenler (sınıf değişkenleri), static metotlar (sınıf metotları), static bloklar (sınıf başlatma) ve nested static sınıflar. Nesnelerden bağımsız olan ve sınıfa ait özelliklerin tanımlanması. static import ve utility sınıfları."
              },
              {
                "id": "object-class", 
                "text": "Object Sınıfı ve Metotları", 
                "description": "Java'da tüm sınıfların atası olan Object sınıfı. equals(), hashCode(), toString(), clone(), finalize(), getClass() metotları ve uygun şekilde override edilmesi. equals() ve hashCode() kontratı."
              },
              {
                "id": "exception-handling", 
                "text": "Exception Handling (İstisna Yönetimi)", 
                "description": "try-catch-finally blokları, try-with-resources yapısı, throw ve throws anahtar kelimeleri. Checked vs Unchecked Exceptions arasındaki farklar ve ne zaman hangisini kullanmak gerektiği. Custom Exception sınıfları oluşturma ve exception hiyerarşisini tasarlama."
              },
              {
                "id": "collections-framework", 
                "text": "Java Collections Framework (JCF)", 
                "description": "Veri yapılarını standart bir şekilde yönetmeyi sağlayan Collections Framework mimarisi. List, Set, Queue, Map arayüzleri ve gerçekleştirimleri. Collections utility sınıfı ve sık kullanılan metotları.",
                "subItems": [
                  {"id": "list", "text": "List: ArrayList, LinkedList", "description": "Sıralı koleksiyonlar için kullanılan yapılar. ArrayList (dinamik dizi, rastgele erişim) ve LinkedList (bağlı liste, ekle/çıkar operasyonları) arasındaki performans farklılıkları."},
                  {"id": "set", "text": "Set: HashSet, LinkedHashSet, TreeSet", "description": "Benzersiz eleman tutan koleksiyonlar. HashCode tabanlı unique kontrolü. hashCode() ve equals() metotlarının doğru implementasyonunun önemi. Hash tabanlı, bağlantılı ve ağaç tabanlı implementasyonların farkları."},
                  {"id": "map", "text": "Map: HashMap, LinkedHashMap, TreeMap", "description": "Anahtar-değer çiftleri tutan koleksiyonlar. Anahtarların benzersiz olması gerekliliği ve Map implementasyonları arasındaki farklar. ConcurrentHashMap gibi thread-safe alternatiflerin varlığı."},
                  {"id": "queue", "text": "Queue: LinkedList, PriorityQueue, Deque", "description": "Kuyruk veri yapıları ve FIFO (First In First Out), LIFO (Last In First Out) prensiplerine göre işlem yapan koleksiyonlar. LinkedList ve ArrayDeque performans özellikleri."}
                ]
              }
            ]
          },
          {
            "id": "java8-features",
            "text": "Java 8+ Özellikleri",
            "description": "Java 8 ve sonrasında gelen önemli yenilikler ve fonksiyonel programlama özellikleri. Yazılım geliştirme paradigmalarının genişlemesi ve modern Java kodlama teknikleri.",
            "subItems": [
              {
                "id": "functional-interfaces", 
                "text": "Functional Interfaces", 
                "description": "Tek bir abstract metot içeren ve @FunctionalInterface anotasyonu ile işaretlenebilen arayüzler. Predicate<T>, Consumer<T>, Function<T,R>, Supplier<T> gibi dahili fonksiyonel arayüzler ve kullanım alanları."
              },
              {
                "id": "lambda-expressions", 
                "text": "Lambda Expressions", 
                "description": "Kısa, anonim fonksiyonları tanımlamaya yarayan sözdizimi. Parametre listesi, ok operatörü (->) ve gövdeden oluşan yapı. Daha az ve daha okunabilir kod yazmanın yolu. Lambda vs Anonymous Inner Class farkları."
              },
              {
                "id": "method-references", 
                "text": "Method References", 
                "description": "Var olan metotları lambda yerine kullanma yöntemi. StaticMethod::methodName, object::instanceMethod, Class::instanceMethod, Class::new gibi farklı formlar ve kullanım alanları."
              },
              {
                "id": "stream-api", 
                "text": "Stream API", 
                "description": "Koleksiyonlar üzerinde fonksiyonel-style işlemler için kullanılan güçlü API. filter, map, flatMap, reduce, collect, sorted, forEach gibi metotlar ve stream pipeline oluşturma. Paralel stream ile çoklu işlemci kullanımı."
              },
              {
                "id": "optional", 
                "text": "Optional Sınıfı", 
                "description": "NullPointerException hatalarından kaçınma ve null kontrollerini daha zarif bir şekilde yapma amacıyla tasarlanmış konteyner sınıfı. orElse, orElseGet, orElseThrow, ifPresent gibi metotlar ve fluent API tasarımı."
              },
              {
                "id": "date-time-api", 
                "text": "Yeni Tarih/Zaman API'si", 
                "description": "LocalDate, LocalTime, LocalDateTime, Instant, Duration, Period sınıfları ile daha tutarlı ve Thread-safe tarih/zaman işlemleri. Immutable yapılar ve DateTimeFormatter ile biçimlendirme."
              },
              {
                "id": "interface-methods", 
                "text": "Interface'lerde default ve static metotlar", 
                "description": "Interface'lere uygulama ekleyebilme yeteneği ve geriye dönük uyumluluk sağlama. Interface evrimini kolaylaştırma ve utility metotları gruplandırma."
              }
            ]
          },
          {
            "id": "annotations",
            "text": "Java'da Anotasyonlar (Annotations)",
            "description": "Java'da metadata tanımlamaya yarayan ve derleme zamanında veya çalışma zamanında işlenebilen özel işaretleyiciler. Reflection API ile birlikte çalışarak güçlü özellikler sağlar.",
            "subItems": [
              {
                "id": "annotation-basics", 
                "text": "Anotasyon Nedir?", 
                "description": "Anotasyonların amacı, kod üzerinde ekstra bilgi sağlamak ve bu bilgilerin derleme zamanında veya çalışma zamanında işlenmesini mümkün kılmak. Deklaratif programlama ve konfigürasyon kolaylığı."
              },
              {
                "id": "standard-annotations", 
                "text": "Standart Anotasyonlar", 
                "description": "@Override (metot geçersiz kılma kontrolü), @Deprecated (kullanımdan kaldırma uyarısı), @SuppressWarnings (belirli uyarıları bastırma), @FunctionalInterface (fonksiyonel arayüz kontrolü) ve bunların kullanım amaçları."
              },
              {
                "id": "meta-annotations", 
                "text": "Meta-Anotasyonlar", 
                "description": "Anotasyonları tanımlamak için kullanılan anotasyonlar. @Target (nerelerde kullanılabileceği), @Retention (bilginin ne kadar süre tutulacağı), @Documented (JavaDoc'a dahil edilme), @Inherited (alt sınıflara aktarılma) ve özel anotasyon oluşturma."
              },
              {
                "id": "custom-annotations", 
                "text": "Özel Anotasyon Oluşturma", 
                "description": "Kendi anotasyonlarınızı tanımlama, elementler ekleme ve varsayılan değerler belirleme. Reflection API kullanarak anotasyonları çalışma zamanında okuma ve işleme koyma teknikleri."
              }
            ]
          }
        ]
      },
      "day1_afternoon": {
        "title": "Spring Framework Temelleri (1. Gün Öğleden Sonra)",
        "items": [
          {
            "id": "spring-basics",
            "text": "Spring Framework Temelleri",
            "description": "Spring Framework'ün temel yapısı, bileşenleri ve amaçları.",
            "subItems": [
              {
                "id": "spring-intro", 
                "text": "Spring Framework Nedir?", 
                "description": "Spring'in ortaya çıkış amacı, çözdüğü problemler ve sağladığı avantajlar."
              },
              {
                "id": "spring-modules", 
                "text": "Spring Modülleri", 
                "description": "Core Container, AOP, Data Access, Web MVC gibi temel Spring modülleri ve genel bakış."
              },
              {
                "id": "ioc-di", 
                "text": "Inversion of Control (IoC) ve Dependency Injection (DI)", 
                "description": "Bağımlılık yönetimini kolaylaştıran tasarım prensipleri ve Spring uygulamaları.",
                "subItems": [
                  {"id": "ioc-principle", "text": "IoC Prensibi", "description": "Kontrol akışının tersine çevrilmesi ve avantajları."},
                  {"id": "di-types", "text": "DI Türleri", "description": "Constructor Injection, Setter Injection, Field Injection ve aralarındaki farklar."},
                  {"id": "context-factory", "text": "ApplicationContext ve BeanFactory", "description": "Temel Spring konteynerleri ve farkları."}
                ]
              },
              {
                "id": "spring-beans", 
                "text": "Spring Beans", 
                "description": "Spring IoC konteyneri tarafından yönetilen nesneler.",
                "subItems": [
                  {"id": "bean-definition", "text": "Bean Tanımlama Yöntemleri", "description": "XML, Annotation, Java Config kullanarak bean tanımlama."},
                  {"id": "bean-scopes", "text": "Bean Scope'ları", "description": "singleton, prototype, request, session gibi bean yaşam alanları."},
                  {"id": "bean-lifecycle", "text": "Bean Yaşam Döngüsü", "description": "@PostConstruct, @PreDestroy ve bean yaşam döngüsü olayları."}
                ]
              }
            ]
          },
          {
            "id": "spring-boot-intro",
            "text": "Spring Boot'a Giriş ve Temel Özellikler",
            "description": "Spring Boot'un Spring Framework üzerine getirdiği yenilikler ve kolaylıklar.",
            "subItems": [
              {
                "id": "spring-boot-basics", 
                "text": "Spring Boot Nedir?", 
                "description": "Auto-configuration, Starter paketleri, Embedded sunucular gibi Spring Boot avantajları."
              },
              {
                "id": "spring-boot-annotation", 
                "text": "@SpringBootApplication Anotasyonu", 
                "description": "@EnableAutoConfiguration, @ComponentScan, @Configuration bileşenleri."
              },
              {
                "id": "spring-boot-annotations", 
                "text": "Temel Spring Boot Anotasyonları", 
                "description": "Stereotype, DI, Config ve Request Mapping anotasyonları.",
                "subItems": [
                  {"id": "stereotype-annotations", "text": "Stereotype Anotasyonları", "description": "@Component, @Service, @Repository, @Controller, @RestController"},
                  {"id": "di-annotations", "text": "DI Anotasyonları", "description": "@Autowired, @Qualifier, @Primary"},
                  {"id": "config-annotations", "text": "Config Anotasyonları", "description": "@Configuration, @Bean, @Value"},
                  {"id": "request-mapping", "text": "Request Mapping Anotasyonları", "description": "@RequestMapping, @GetMapping, @PostMapping vb."}
                ]
              },
              {
                "id": "application-properties", 
                "text": "application.properties vs application.yml", 
                "description": "Spring Boot yapılandırması, profil yönetimi ve property tanımlamaları."
              }
            ]
          },
          {
            "id": "design-principles",
            "text": "Tasarım Prensipleri (Design Principles)",
            "description": "İyi yazılım tasarımı için takip edilmesi gereken prensipler.",
            "subItems": [
              {
                "id": "solid", 
                "text": "SOLID Prensipleri", 
                "description": "Sürdürülebilir ve esnek kod yazma prensipleri.",
                "subItems": [
                  {"id": "srp", "text": "Single Responsibility Principle", "description": "Bir sınıfın sadece bir sorumluluğu olmalıdır."},
                  {"id": "ocp", "text": "Open/Closed Principle", "description": "Sınıflar genişletmeye açık ancak değişime kapalı olmalıdır."},
                  {"id": "lsp", "text": "Liskov Substitution Principle", "description": "Alt sınıflar, üst sınıfların yerine geçebilmelidir."},
                  {"id": "isp", "text": "Interface Segregation Principle", "description": "Büyük interface'ler yerine, küçük ve odaklanmış interface'ler tercih edilmelidir."},
                  {"id": "dip", "text": "Dependency Inversion Principle", "description": "Yüksek seviyeli modüller, düşük seviyeli modüllere bağımlı olmamalıdır."}
                ]
              },
              {
                "id": "other-principles", 
                "text": "DRY, KISS, YAGNI Prensipleri", 
                "description": "Don't Repeat Yourself, Keep It Simple, Stupid!, You Aren't Gonna Need It prensipleri."
              },
              {
                "id": "design-patterns", 
                "text": "Yaygın Kullanılan Design Patterns", 
                "description": "Singleton, Factory, Builder, Adapter, Decorator, Facade, Observer, Strategy gibi tasarım desenleri ve Spring'deki uygulamaları."
              }
            ]
          },
          {
            "id": "project-learning",
            "text": "Proje Üzerinden Öğrenme Önerileri",
            "description": "Temel Spring Boot projeleri inceleyerek pratik yapma önerileri.",
            "subItems": [
              {
                "id": "example-projects", 
                "text": "Örnek Projeler", 
                "description": "GitHub'da 'spring boot todo app', 'spring boot library management' gibi basit CRUD projelerini inceleme."
              },
              {
                "id": "learning-topics", 
                "text": "Öğrenilecek Konular", 
                "description": "Katmanlı Mimari, DTO, REST API, Logging gibi temel konuları projeler üzerinden öğrenme."
              }
            ]
          }
        ]
      },
      "day2_morning": {
        "title": "Web Uygulamaları ve Spring MVC (2. Gün Sabah)",
        "items": [
          {
            "id": "spring-mvc-rest",
            "text": "Spring MVC ile Web Uygulamaları ve REST API Geliştirme",
            "description": "Spring MVC mimarisi ve RESTful API geliştirme prensipleri.",
            "subItems": [
              {
                "id": "mvc-architecture", 
                "text": "Spring MVC Mimarisi", 
                "description": "DispatcherServlet, HandlerMapping, HandlerAdapter, ViewResolver / HttpMessageConverter bileşenleri."
              },
              {
                "id": "controllers", 
                "text": "Controller'lar ve İstek Karşılama", 
                "description": "@RestController vs @Controller, istek parametrelerini alma ve yanıt oluşturma yöntemleri.",
                "subItems": [
                  {"id": "controller-types", "text": "@RestController vs @Controller", "description": "@ResponseBody kullanımı ve farkları."},
                  {"id": "request-params", "text": "İstek Parametrelerini Alma", "description": "@PathVariable, @RequestParam, @RequestBody, @RequestHeader kullanımları."},
                  {"id": "response-creation", "text": "Yanıt Oluşturma", "description": "ResponseEntity, @ResponseStatus kullanımları."}
                ]
              },
              {
                "id": "rest-principles", 
                "text": "RESTful API Tasarım Prensipleri", 
                "description": "Kaynak (Resource), URL tasarımı, HTTP metodları, durum kodları ve temel prensipler.",
                "subItems": [
                  {"id": "resource-url", "text": "Kaynak ve URL Tasarımı", "description": "Noun, çoğul, versiyonlama prensipleri."},
                  {"id": "http-methods", "text": "HTTP Metodları", "description": "GET, POST, PUT, DELETE, PATCH kullanım amaçları."},
                  {"id": "status-codes", "text": "HTTP Durum Kodları", "description": "2xx, 4xx, 5xx durum kodları ve anlamları."},
                  {"id": "rest-principles", "text": "Idempotency, Safety, Statelessness", "description": "RESTful API tasarım prensipleri."}
                ]
              },
              {
                "id": "validation", 
                "text": "Validation (Bean Validation API)", 
                "description": "@Valid, @NotNull, @Size gibi anotasyonlarla veri doğrulama."
              }
            ]
          }
        ]
      },
      "day2_afternoon": {
        "title": "Veri Erişimi ve Spring Data JPA (2. Gün Öğleden Sonra)",
        "items": [
          {
            "id": "spring-data-jpa",
            "text": "Spring Data JPA ile Veritabanı İşlemleri",
            "description": "JPA ve ORM kavramları, Spring Data JPA kullanımı.",
            "subItems": [
              {
                "id": "jpa-orm", 
                "text": "JPA ve ORM Kavramları", 
                "description": "Hibernate, EntityManager, Persistence Context ve temel ORM kavramları."
              },
              {
                "id": "spring-data-basics", 
                "text": "Spring Data JPA Temelleri", 
                "description": "Repository arayüzleri, sorgu metotları, @Query kullanımı.",
                "subItems": [
                  {"id": "repository-interfaces", "text": "Repository Arayüzleri", "description": "CrudRepository, PagingAndSortingRepository, JpaRepository"},
                  {"id": "query-methods", "text": "Sorgu Metotları", "description": "Query Methods / Derived Queries kullanımı."},
                  {"id": "query-annotation", "text": "@Query ve @Modifying", "description": "JPQL ve Native SQL sorguları yazma."},
                  {"id": "projections", "text": "Projections", "description": "Veri sonuçlarını şekillendirme."}
                ]
              },
              {
                "id": "entity-definition", 
                "text": "Entity (Varlık) Tanımlama", 
                "description": "JPA entity tanımlama, anotasyonlar ve ilişki tipleri.",
                "subItems": [
                  {"id": "entity-annotations", "text": "Entity Anotasyonları", "description": "@Entity, @Table, @Id, @GeneratedValue, @Column, @Transient"},
                  {"id": "relationship-types", "text": "İlişki Tipleri", "description": "@OneToOne, @OneToMany, @ManyToOne, @ManyToMany"},
                  {"id": "relationship-details", "text": "İlişki Detayları", "description": "mappedBy, Fetch Type (LAZY vs EAGER), Cascade Type"},
                  {"id": "embedded-entities", "text": "Gömülü Varlıklar", "description": "@Embeddable, @Embedded, @Version"}
                ]
              },
              {
                "id": "db-config", 
                "text": "Veritabanı Konfigürasyonu", 
                "description": "application.properties/yml içinde spring.datasource ve spring.jpa ayarları."
              }
            ]
          },
          {
            "id": "project-learning-2",
            "text": "Proje Üzerinden Öğrenme Önerileri (Devam)",
            "description": "Veri erişimi konularını projeler üzerinden pratik yapma.",
            "subItems": [
              {
                "id": "project-exercises", 
                "text": "Proje Egzersizleri", 
                "description": "REST endpoint ekleme, entity ilişkileri kurma, JPQL sorguları yazma, validasyon ekleme."
              },
              {
                "id": "learning-topics-2", 
                "text": "Öğrenilecek Konular", 
                "description": "Pageable (Sayfalama), Sort (Sıralama), Global Exception Handling (@ControllerAdvice)."
              }
            ]
          }
        ]
      },
      "day3_morning": {
        "title": "İleri Konular ve Test (3. Gün Sabah)",
        "items": [
          {
            "id": "spring-ecosystem",
            "text": "Spring Ekosisteminden Önemli Konular",
            "description": "Spring ekosistemindeki ileri düzey konular ve modüller.",
            "subItems": [
              {
                "id": "spring-security", 
                "text": "Spring Security Temelleri", 
                "description": "Authentication vs Authorization, SecurityFilterChain, UserDetailsService, PasswordEncoder."
              },
              {
                "id": "aop", 
                "text": "AOP (Aspect-Oriented Programming)", 
                "description": "Cross-Cutting Concerns, Aspect, Join Point, Advice, Pointcut kavramları."
              },
              {
                "id": "spring-boot-actuator", 
                "text": "Spring Boot Actuator", 
                "description": "Uygulama sağlığı, metrikler ve temel endpoint'ler (/health, /info, /metrics)."
              },
              {
                "id": "transaction-management", 
                "text": "Transaction Management", 
                "description": "ACID, @Transactional anotasyonu, Propagation Seviyeleri, Rollback Kuralları."
              }
            ]
          },
          {
            "id": "test-approaches",
            "text": "Test Yaklaşımları",
            "description": "Java ve Spring Boot uygulamaları için test stratejileri ve yöntemleri.",
            "subItems": [
              {
                "id": "test-importance", 
                "text": "Testin Önemi, Test Piramidi", 
                "description": "Birim testleri, entegrasyon testleri ve uçtan uca testlerin dengesi."
              },
              {
                "id": "unit-testing", 
                "text": "Unit Testing (Birim Testler)", 
                "description": "JUnit 5, Mockito kullanımı ve servis katmanı testleri.",
                "subItems": [
                  {"id": "junit5", "text": "JUnit 5", "description": "@Test, Assertions ve temel kullanım."},
                  {"id": "mockito", "text": "Mockito", "description": "@Mock, @InjectMocks, when().thenReturn(), verify() kullanımı."},
                  {"id": "service-tests", "text": "Servis Katmanı Testleri", "description": "Servis birimlerinin test edilmesi."}
                ]
              },
              {
                "id": "integration-testing", 
                "text": "Integration Testing (Entegrasyon Testleri)", 
                "description": "@SpringBootTest, MockMvc ile Controller testleri, @DataJpaTest."
              }
            ]
          }
        ]
      },
      "day3_afternoon": {
        "title": "Diğer Teknolojiler ve CV Hazırlığı (3. Gün Öğleden Sonra)",
        "items": [
          {
            "id": "other-technologies",
            "text": "CV'de Bahsedilen Diğer Teknolojiler",
            "description": "Apache Kafka, Apache Flink gibi teknolojilerin kavramsal anlatımı.",
            "subItems": [
              {
                "id": "apache-kafka", 
                "text": "Apache Kafka", 
                "description": "Producer, Consumer, Topic, Partition, Broker gibi temel Kafka kavramları."
              },
              {
                "id": "apache-flink", 
                "text": "Apache Flink", 
                "description": "DataStream, Sources, Sinks, Transformations, Stateful Computations gibi temel Flink kavramları."
              },
              {
                "id": "framework-comparison", 
                "text": "Django & .NET Karşılaştırması", 
                "description": "Django, .NET ve Spring Boot arasındaki temel farklar, avantajlar/dezavantajlar."
              }
            ]
          },
          {
            "id": "project-learning-3",
            "text": "Proje Üzerinden Öğrenme Önerileri (İleri Seviye)",
            "description": "İleri düzey konuların projeler üzerinden pekiştirilmesi.",
            "subItems": [
              {
                "id": "advanced-exercises", 
                "text": "İleri Seviye Egzersizler", 
                "description": "Mockito ile Unit Test yazma, MockMvc ile Integration Test yazma, Actuator endpoint'leri inceleme."
              },
              {
                "id": "learning-topics-3", 
                "text": "Öğrenilecek Konular", 
                "description": "Basit Spring Security yapılandırması, @Transactional kullanımı."
              }
            ]
          }
        ]
      },
      "day3_evening": {
        "title": "CV ve Mülakat Hazırlığı (3. Gün Akşam)",
        "items": [
          {
            "id": "softtech-internship",
            "text": "Softtech Staj Deneyimi - Teknik Derinlemesine",
            "description": "Staj deneyimiyle ilgili gelebilecek sorulara hazırlık.",
            "subItems": [
              {
                "id": "pos-systems", 
                "text": "POS Ödeme Sistemleri Geliştirmesi", 
                "description": ".NET teknolojileri, geliştirilen modüller, karşılaşılan teknik problemler ve çözümleri."
              },
              {
                "id": "tools-usage", 
                "text": "Jira ve Azure DevOps Kullanımı", 
                "description": "Geliştirme döngüsünde bu araçların nasıl kullanıldığı, branch, commit, PR, code review süreçleri."
              },
              {
                "id": "enterprise-dev", 
                "text": "Kurumsal Düzeyde Yazılım Geliştirme", 
                "description": "Gözlemlenen iyi yazılım mühendisliği pratikleri, kod standartları, test süreçleri, CI/CD."
              }
            ]
          },
          {
            "id": "tech-competencies",
            "text": "Teknoloji Yetkinlikleri ve Projeler",
            "description": "Farklı programlama dilleri ve teknolojilerdeki deneyimlerle ilgili sorulara hazırlık.",
            "subItems": [
              {
                "id": "multiple-languages", 
                "text": "Çoklu Dil Deneyimi (Python, Java, C#)", 
                "description": "Farklı dillerde çalışmanın Java ekosistemindeki bir geliştirici olarak sağladığı avantajlar."
              },
              {
                "id": "kafka-flink", 
                "text": "Apache Kafka ve Apache Flink Deneyimi", 
                "description": "Gerçek zamanlı veri işleme senaryoları, mimari yaklaşımlar, karşılaşılan zorluklar ve best practice'ler."
              },
              {
                "id": "framework-comparison-2", 
                "text": "Django ve .NET ile Spring Boot Karşılaştırması", 
                "description": "Her bir framework'ün güçlü ve zayıf yönleri, kullanım senaryoları."
              }
            ]
          },
          {
            "id": "behavioral-questions",
            "text": "Davranışsal Sorular ve CV Diğer Yetenekler",
            "description": "Mülakatlarda sıkça sorulan davranışsal sorulara hazırlık.",
            "subItems": [
              {
                "id": "chess-programming", 
                "text": "Satranç Deneyiminin Yazılım Geliştirmeye Etkisi", 
                "description": "Satranç geçmişinin problem çözme, analitik düşünme ve stratejik planlama becerilerine katkısı."
              },
              {
                "id": "motivation", 
                "text": "Garanti BBVA'da Çalışma Motivasyonu", 
                "description": "Teknoloji stack'i, projeler ve kurum kültürü açısından cezbeden noktalar."
              },
              {
                "id": "team-work", 
                "text": "Takım Çalışması ve Fikir Ayrılıkları", 
                "description": "Teknik yaklaşım konusunda fikir ayrılıklarını çözme deneyimleri."
              },
              {
                "id": "learning-method", 
                "text": "Yeni Teknoloji Öğrenme Yöntemi", 
                "description": "Yeni bir programlama dili, framework veya teknoloji öğrenirken izlenen yöntemler."
              },
              {
                "id": "career-vision", 
                "text": "Kariyer Vizyonu", 
                "description": "Teknik açıdan 3-5 yıl içinde hedeflenen uzmanlık alanları ve teknolojiler."
              }
            ]
          },
          {
            "id": "interview-closing",
            "text": "Mülakat Kapanışı",
            "description": "Mülakat sonunda sorulabilecek sorulara ve kapanış stratejisine hazırlık.",
            "subItems": [
              {
                "id": "questions-to-ask", 
                "text": "Mülakatta Sorulacak Sorular", 
                "description": "Garanti BBVA Teknoloji'deki pozisyon, takım yapısı, teknolojiler ve gelişim fırsatlarıyla ilgili sorular."
              },
              {
                "id": "final-pitch", 
                "text": "Final Değerlendirme", 
                "description": "Pozisyona neden en uygun aday olduğunuzu düşündüğünüzü ve katacağınız değeri özetleyen kapanış cümlesi."
              }
            ]
          }
        ]
      }
    }
  }
};