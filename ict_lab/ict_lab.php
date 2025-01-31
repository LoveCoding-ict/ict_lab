<?php  
// Include the dynamic data from a separate PHP file or database (data.php or database)
include('data.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js" defer></script>
</head>

<body>
    <!-- Sidebar -->
    <div class="sidebar" id="sidebar">
        <div class="logo"><img src="img/logo.png" alt="Logo"></div>
        <span class="close-btn" onclick="closeMenu()">&times;</span>
        <div class="accordion" id="accordionSidebar">
            <div class="accordion-item" id="headingOne">
                <h2 class="accordion-header">
                    <a href="ict_lab.php" id="ictLabLink" class="accordion-button collapsed" style="text-decoration: none;" aria-expanded="false">ទំព័រដើម</a>
                </h2>
            </div>

            <?php
            $accordionItems = [
                "សៀវភៅសិក្សាគោល" => $pdfLinks,
                "សៀវភៅស្លឹករឹត" => $pdfLinks1,
                "សៀវភៅនពន្ធ" => $pdfLinks2,
                "សៀវភៅពិពណ៌" => $pdfLinks3,  
                "សៀវភៅគម្រោង" => $pdfLinks4,
            ];

            foreach ($accordionItems as $title => $links) {
                echo '<div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' . md5($title) . '" aria-expanded="false">
                                ' . $title . '
                            </button>
                        </h2>
                        <div id="collapse' . md5($title) . '" class="accordion-collapse collapse" data-bs-parent="#accordionSidebar">
                            <div class="accordion-body">';

                foreach ($links as $link) {
                    echo '<button class="btn btn-primary mb-2 w-100" onclick="showContent(\'' . htmlspecialchars($link['url']) . '\')">' . htmlspecialchars($link['text']) . '</button>';
                }

                echo '</div>
                      </div>
                  </div>';
            }
            ?>

            <div class="accordion-item" id="headingOne">
                <h2 class="accordion-header">
                    <a href="logout.php"  id="ictLabLink" class="accordion-button collapsed" style="text-decoration: none;" aria-expanded="false">ចាកចេញ</a>
                </h2>
            </div>
        </div>
    </div>

   <!-- Open Menu Icon -->
   <span class="openmenu" id="openmenu" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
    </span>
    <!-- Main Content -->
    <div class="main-content" id="main-content">
        <div id="demo" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img/img1.png" alt="Slide 1">
                    <div class="carousel-caption">
                        <h1>Welcome to ICT Lab</h1>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/img2.png" alt="Slide 2">
                    <div class="carousel-caption">
                        <h1>Welcome to ICT Lab</h1>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/img3.png" alt="Slide 3">
                    <div class="carousel-caption">
                        <h1>Welcome to ICT Lab</h1>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/img4.png" alt="Slide 4">
                    <div class="carousel-caption">
                        <h1>Welcome to ICT Lab</h1>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
            <div class="button-group" id="buttonGroup">
            <!-- The buttons will be dynamically inserted here by JavaScript -->
        </div>

        <!-- <div class="button-group">
            <button type="button" class="btn custom-btn" id="btn1" data-bs-toggle="modal" data-bs-target="#myModal">លេខហ្កេមចុងម៉ោង</button>
            <button type="button" class="btn custom-btn" id="btn2" data-bs-toggle="modal" data-bs-target="#myModal">ប្រឡងICT12</button>
            <button type="button" class="btn custom-btn" id="btn3" data-bs-toggle="modal" data-bs-target="#myModal">ពិន្ទុICT12</button>
            <button type="button" class="btn custom-btn" id="btn4" data-bs-toggle="modal" data-bs-target="#myModal">សន្លឹកកិច្ចការស្វ័យសិក្សា</button>
            <button type="button" class="btn custom-btn" id="btn5" data-bs-toggle="modal" data-bs-target="#myModal"> Slide មេរៀន</button>
            <button type="button" class="btn custom-btn" id="btn6" data-bs-toggle="modal" data-bs-target="#myModal">លេខហ្កេមចុងម៉ោង</button>
            <button type="button" class="btn custom-btn" id="btn7" data-bs-toggle="modal" data-bs-target="#myModal">ប្រឡងICT11</button>
        </div> -->
        
        <!-- Modal Structure -->
        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title text-center" id="myModalLabel"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul id="contentList">
                            <!-- Dynamic list of titles will be inserted here -->
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <iframe id="content-frame" height="200vh" src="" title="Content Viewer" style="width: 100%; border: none;"></iframe>
    </div>

    <!-- Footer -->
    <footer class="bg-white text-black text-center py-4">
        <p>&copy; <?php echo date("Y"); ?> ICT Lab. All rights reserved.</p>
    </footer>
    
</body>

</html>
